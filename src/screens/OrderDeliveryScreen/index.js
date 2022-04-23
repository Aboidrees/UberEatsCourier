import React, { useState, useRef, useMemo, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import {
  FontAwesome5,
  Fontisto,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

import { LoadingIndicator } from "../../components";
import orders from "../../../assets/data/orders.json";
const order = orders[1];

const restaurantLocation = {
  latitude: order.Restaurant.latitude,
  longitude: order.Restaurant.longitude,
};
const userLocation = {
  latitude: order.User.latitude,
  longitude: order.User.longitude,
};

const ORDER_STATUSES = {
  READY_FOR_PICKUP: "READY_FOR_PICKUP",
  ACCEPTED: "ACCEPTED",
  PICKED_UP: "PICKED_UP",
};

export const OrderDeliveryScreen = () => {
  const navigation = useNavigation();

  const [driverLocation, setDriverLocation] = useState(null);
  const [totalMinuets, setTotalMinuets] = useState(0);
  const [totalKm, setTotalKm] = useState(0);
  const [deliveryStatus, setDeliveryStatus] = useState(
    ORDER_STATUSES.READY_FOR_PICKUP
  );
  const [isDriverClose, setIsDriverClose] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const mapRef = useRef(null);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    // get the location service permission
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (!status === "granted") return;
      const { coords } = await Location.getCurrentPositionAsync();
      setDriverLocation(coords);
    })();

    // watching position
    const foregroundSubscription = Location.watchPositionAsync(
      { accuracy: Location.Accuracy.BestForNavigation, distanceInterval: 500 },
      ({ coords }) => setDriverLocation(coords)
    );
    return foregroundSubscription;
  }, []);

  if (!driverLocation) return <LoadingIndicator />;

  const onButtonPressed = () => {
    if (deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP) {
      bottomSheetRef.current?.collapse();
      mapRef.current?.animateToRegion({
        ...driverLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setDeliveryStatus(ORDER_STATUSES.ACCEPTED);
    }
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED) {
      bottomSheetRef.current?.collapse();
      setDeliveryStatus(ORDER_STATUSES.PICKED_UP);
    }
    if (deliveryStatus === ORDER_STATUSES.PICKED_UP) {
      bottomSheetRef.current?.collapse();
      console.log("delivery Finished");
      navigation.goBack();
    }
  };

  const renderButtonTitle = () => {
    if (deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP)
      return "Accept Order";
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED) return "Pick-Up";
    if (deliveryStatus === ORDER_STATUSES.PICKED_UP) return "Complete Delivery";
  };

  const isButtonDisabled = () => {
    if (deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP) return false;
    if (deliveryStatus === ORDER_STATUSES.ACCEPTED && isDriverClose)
      return false;
    if (deliveryStatus === ORDER_STATUSES.PICKED_UP && isDriverClose)
      return false;

    return true;
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={{ height: height, width: width }}
        initialRegion={{
          ...driverLocation,
          latitudeDelta: 0.07,
          longitudeDelta: 0.07,
        }}
        showsUserLocation
        followsUserLocation
      >
        <MapViewDirections
          origin={driverLocation}
          destination={
            deliveryStatus === ORDER_STATUSES.ACCEPTED
              ? restaurantLocation
              : userLocation
          }
          waypoints={
            deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP
              ? [restaurantLocation]
              : []
          }
          strokeWidth={10}
          strokeColor="#3FC060"
          apikey={"API-KEY"}
          onReady={({ duration, distance }) => {
            setIsDriverClose(distance <= 0.1);
            setTotalMinuets(duration);
            setTotalKm(distance);
          }}
        />

        <Marker
          coordinate={restaurantLocation}
          title={order.Restaurant.name}
          description={order.Restaurant.address}
        >
          <View
            style={{ backgroundColor: "#3FC060", padding: 5, borderRadius: 20 }}
          >
            <Entypo name="shop" size={30} color="white" />
          </View>
        </Marker>

        <Marker
          coordinate={userLocation}
          title={order.User.name}
          description={order.User.address}
        >
          <View
            style={{ backgroundColor: "#3FC060", padding: 5, borderRadius: 20 }}
          >
            <MaterialIcons name="restaurant" size={30} color="white" />
          </View>
        </Marker>
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <View style={styles.handleIndicatorContainer}>
          <Text style={styles.routeDetailsText}>
            {totalMinuets.toFixed(0)} min
          </Text>
          <FontAwesome5
            name="shopping-bag"
            size={30}
            color="#3FC060"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.routeDetailsText}>{totalKm.toFixed(1)} km</Text>
        </View>

        <View style={styles.deliveryDetailsContainer}>
          <Text style={styles.restaurantName}>{order.Restaurant.name}</Text>

          <View style={styles.addressContainer}>
            <Fontisto
              name="shopping-store"
              size={22}
              color="grey"
              style={{ marginHorizontal: 10 }}
            />
            <Text style={styles.addressText}>{order.Restaurant.address}</Text>
          </View>

          <View style={styles.addressContainer}>
            <FontAwesome5
              name="map-marker-alt"
              size={30}
              color="grey"
              style={{ marginHorizontal: 10 }}
            />
            <Text style={styles.addressText}>{order.User.address}</Text>
          </View>

          <View style={styles.orderDetailsContainer}>
            <Text style={styles.orderItemText}>Onion Rings x1</Text>
            <Text style={styles.orderItemText}>Big Mac x3</Text>
            <Text style={styles.orderItemText}>Big Tasty x2</Text>
            <Text style={styles.orderItemText}>Coca-Cola x1</Text>
          </View>
        </View>

        <Pressable
          onPress={onButtonPressed}
          disabled={isButtonDisabled()}
          style={[
            styles.buttonContainer,
            isButtonDisabled() && { backgroundColor: "grey" },
          ]}
        >
          <Text style={styles.buttonText}>{renderButtonTitle()}</Text>
        </Pressable>
      </BottomSheet>
      {deliveryStatus === ORDER_STATUSES.READY_FOR_PICKUP && (
        <Ionicons
          name="arrow-back-circle"
          size={45}
          onPress={navigation.goBack}
          color="#3FC060"
          style={{ top: 40, left: 15, position: "absolute" }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "lightblue", flex: 1 },
  handleIndicator: { backgroundColor: "grey", width: 100 },
  handleIndicatorContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  routeDetailsText: { fontSize: 25, letterSpacing: 1 },
  deliveryDetailsContainer: { paddingHorizontal: 20 },
  restaurantName: { fontSize: 25, letterSpacing: 1, paddingVertical: 20 },
  addressContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  addressText: {
    fontSize: 20,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginLeft: 15,
  },
  orderDetailsContainer: {
    borderTopWidth: 1,
    borderColor: "lightgrey",
    paddingTop: 20,
  },
  orderItemText: {
    fontSize: 18,
    color: "grey",
    fontWeight: "500",
    letterSpacing: 0.5,
    marginLeft: 5,
  },
  buttonContainer: {
    backgroundColor: "#3FC060",
    marginTop: "auto",
    marginVertical: 30,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    paddingVertical: 15,
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
