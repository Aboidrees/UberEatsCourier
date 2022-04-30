import MapView from "react-native-maps";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Ionicons, Entypo, MaterialIcons, Fontisto } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { LoadingIndicator, CustomMarker } from "../../components";
import { BottomSheetDetails } from "./BottomSheetDetails";
import { useAuthContext, useOrderContext } from "../../context";
import { DataStore } from "aws-amplify";
import { Courier } from "../../models";

export const OrderDeliveryScreen = () => {
  const mapRef = useRef(null);

  const [driverLocation, setDriverLocation] = useState(null);
  const [totalMinuets, setTotalMinuets] = useState(0);
  const [totalKm, setTotalKm] = useState(0);

  const { order, user, fetchOrder } = useOrderContext();
  const { dbCourier } = useAuthContext();
  const { width, height } = useWindowDimensions();

  const navigation = useNavigation();
  const { params } = useRoute();
  const id = params?.id;

  useEffect(() => fetchOrder(id), [id]);

  useEffect(() => {
    if (!driverLocation) return;

    DataStore.save(
      Courier.copyOf(dbCourier, (updated) => {
        updated.latitude = driverLocation.latitude;
        updated.longitude = driverLocation.longitude;
      })
    );
    mapRef?.current?.animateToRegion({
      ...driverLocation, latitudeDelta: 0.007, longitudeDelta: 0.007
    });
  }, [driverLocation]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
      const { coords } = await Location.getCurrentPositionAsync();
      setDriverLocation(coords);
    })();

    const foregroundSubscription = Location.watchPositionAsync(
      { accuracy: Location.Accuracy.BestForNavigation, distanceInterval: 100 },
      ({ coords }) => setDriverLocation(coords)
    );
    return foregroundSubscription;
  }, []);

  const zoomInOnDriver = () => {
    mapRef.current?.animateToRegion({
      latitude: driverLocation.latitude,
      longitude: driverLocation.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  const restaurantLocation = {
    latitude: order?.Restaurant?.latitude,
    longitude: order?.Restaurant?.longitude,
  };

  const userLocation = {
    latitude: user?.latitude,
    longitude: user?.longitude,
  };


  if (!driverLocation) return <LoadingIndicator />;

  if (!order || !user || !order?.Restaurant)
    return <LoadingIndicator />;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        initialRegion={{ ...restaurantLocation, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        style={{ height: height, width: width }}
      >
        <MapViewDirections
          origin={{ latitude: driverLocation.latitude, longitude: driverLocation.longitude }}
          // lineDashPattern={[0]}
          destination={
            order.status === "ACCEPTED" ? restaurantLocation : userLocation
          }
          waypoints={
            order.status === "READY_FOR_PICKUP" ? [restaurantLocation] : []
          }
          strokeWidth={6}
          strokeColor="#3FC060"
          apikey={"AIzaSyBmBxEQgbpLbyBwfNSRuFZjWGo8QMYyGa0"}
          onReady={({ duration, distance }) => {
            setTotalMinuets(duration);
            setTotalKm(distance);
          }}
        />

        <CustomMarker data={{ ...driverLocation, name: "You" }} size={50}>
          <Fontisto name={dbCourier?.transportationMode === "DRIVING" ? "car" : "motorcycle"} size={30} color="white" />

        </CustomMarker>

        <CustomMarker data={order?.Restaurant}>
          <Entypo name="shop" size={30} color="white" />
        </CustomMarker>

        <CustomMarker data={user}>
          <MaterialIcons name="restaurant" size={30} color="white" />
        </CustomMarker>
      </MapView>

      <BottomSheetDetails
        totalKm={totalKm}
        totalMinuets={totalMinuets}
        onAccepted={zoomInOnDriver}
      />

      {order.status === "READY_FOR_PICKUP" && (
        <Ionicons
          name="arrow-back-circle"
          size={45}
          onPress={navigation.goBack}
          color="#3FC060"
          style={styles.backIcon}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "lightblue", flex: 1 },

  backIcon: { top: 40, left: 15, position: "absolute" },
});
