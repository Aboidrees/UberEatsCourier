import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { Entypo, Fontisto } from "@expo/vector-icons";
import { DataStore } from "aws-amplify";
import * as Location from "expo-location";
import MapView from "react-native-maps";

import { CustomMarker, LoadingIndicator, OrderItem } from "../../components";
import { Courier, Order } from "../../models";
import { useAuthContext } from "../../context";

export const OrdersScreen = () => {
  const [driverLocation, setDriverLocation] = useState(null);
  const [orders, setOrders] = useState([]);
  const { dbCourier } = useAuthContext();
  const { width, height } = useWindowDimensions();
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const bottomSheetRef = useRef(null);
  const mapRef = useRef(null);

  const fetchOrders = () =>
    DataStore.query(Order, (order) =>
      order.status("eq", "READY_FOR_PICKUP")
    ).then(setOrders);

  useEffect(() => {
    fetchOrders();
    const subscription = DataStore.observe(Order).subscribe(
      ({ opType }) => opType === "UPDATE" && fetchOrders()
    );
    return () => subscription.unsubscribe();
  }, []);

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
    // get the location service permission
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
      });
      setDriverLocation(coords);
    })();
    const foregroundSubscription = Location.watchPositionAsync(
      { accuracy: Location.Accuracy.BestForNavigation, distanceInterval: 100 },
      ({ coords }) => setDriverLocation(coords)
    );
    return foregroundSubscription;
  }, []);

  if (!driverLocation) return <LoadingIndicator text={"loading map..."} />;

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView initialRegion={{
        ...driverLocation, latitudeDelta: 0.1, longitudeDelta: 0.1
      }} ref={mapRef} style={{ height, width }}>

        <CustomMarker data={{ ...driverLocation, name: "You" }} size={50}>
          <Fontisto name="motorcycle" size={30} color="white" />
        </CustomMarker>

        {orders?.map(({ Restaurant }, index) => (
          <CustomMarker key={index} data={Restaurant}>
            <Entypo name="shop" size={24} color="white" />
          </CustomMarker>
        ))}
      </MapView>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={{ backgroundColor: "grey", width: 100 }}
      >
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "grey" }}>
            Available Orders ({orders?.length})
          </Text>
        </View>

        <BottomSheetFlatList
          data={orders}
          renderItem={({ item }) =>
            item.Restaurant && <OrderItem order={item} />
          }
        />
      </BottomSheet>
    </View >
  );
};
