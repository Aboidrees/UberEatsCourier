import React, { useRef, useMemo } from "react";
import { Text, View, FlatList, useWindowDimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import { Entypo } from "@expo/vector-icons";

import { OrderItem } from "../../components";
import orders from "../../../assets/data/orders.json";

export const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "95%"], []);
  const { width, height } = useWindowDimensions();

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView
        style={{ height: height, width: width }}
        showsUserLocation
        followsUserLocation
      >
        {orders.map((order) => {
          return (
            <Marker
              key={order.id}
              title={order.Restaurant.name}
              coordinate={{
                latitude: order.Restaurant.latitude,
                longitude: order.Restaurant.longitude,
              }}
              description={order.Restaurant.address}
            >
              <View
                style={{
                  backgroundColor: "green",
                  padding: 5,
                  borderRadius: 20,
                }}
              >
                <Entypo name="shop" size={24} color="white" />
              </View>
            </Marker>
          );
        })}
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
            Available Orders:
          </Text>
        </View>

        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </BottomSheet>
    </View>
  );
};
