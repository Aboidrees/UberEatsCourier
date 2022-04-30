import React, {useRef, useMemo, useEffect} from "react";
import {Text, View, Pressable, StyleSheet} from "react-native";
import {FontAwesome5, Fontisto} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";
import {useOrderContext} from "../../context";

const STATUS_TO_TITLE = {
  READY_FOR_PICKUP: "Accept Order",
  PICKED_UP: "Complete Delivery",
  ACCEPTED: "Pick-Up Order",
};

export const BottomSheetDetails = (props) => {
  const {totalKm, totalMinuets, onAccepted} = props;

  const isDriverClose = totalKm <= 0.2; // decrease for higher accuracy

  const navigation = useNavigation();

  const {order, user, dishes, acceptOrder, completeOrder, pickUpOrder} = useOrderContext();
  const {status} = order;
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["12%", "88%"], []);

  useEffect(() => {
    isDriverClose && bottomSheetRef.current?.expand();
  }, [isDriverClose]);

  const onButtonPressed = async () => {
    if (status === "READY_FOR_PICKUP") {
      bottomSheetRef.current?.collapse();
      await acceptOrder();
      onAccepted();
    }

    if (status === "ACCEPTED") {
      bottomSheetRef.current?.collapse();
      await pickUpOrder();
    }

    if (status === "PICKED_UP") {
      bottomSheetRef.current?.collapse();
      await completeOrder();
      navigation.goBack();
    }
  };

  const isButtonDisabled = () => {
    if (status === "READY_FOR_PICKUP") return false;
    return !((status === "ACCEPTED" || status === "PICKED_UP") && isDriverClose);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
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
          style={{marginHorizontal: 10}}
        />
        <Text style={styles.routeDetailsText}>{totalKm.toFixed(1)} km</Text>
      </View>

      <View style={styles.deliveryDetailsContainer}>
        <Text style={styles.restaurantName}>{order?.Restaurant?.name}</Text>
        <View style={styles.addressContainer}>
          <Fontisto
            name="shopping-store"
            size={22}
            color="grey"
            style={{marginHorizontal: 10}}
          />
          <Text style={styles.addressText}>{order?.Restaurant?.address}</Text>
        </View>

        <View style={styles.addressContainer}>
          <FontAwesome5
            name="map-marker-alt"
            size={30}
            color="grey"
            style={{marginHorizontal: 10}}
          />
          <Text style={styles.addressText}>{user?.address}</Text>
        </View>

        <View style={styles.orderDetailsContainer}>
          {dishes?.map((item, index) => (
            <Text key={index} style={styles.orderItemText}>
              {item.Dish.name} x {item.quantity}
            </Text>
          ))}
        </View>
      </View>

      <Pressable
        onPress={onButtonPressed}
        disabled={isButtonDisabled()}
        style={[styles.buttonContainer, !isButtonDisabled() && styles.active]}
      >
        <Text style={styles.buttonText}>{STATUS_TO_TITLE[status]}</Text>
      </Pressable>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  handleIndicator: {backgroundColor: "grey", width: 100},
  handleIndicatorContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  routeDetailsText: {fontSize: 25, letterSpacing: 1},
  deliveryDetailsContainer: {paddingHorizontal: 20},
  restaurantName: {fontSize: 25, letterSpacing: 1, paddingVertical: 20},
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
    backgroundColor: "grey",
    marginTop: "auto",
    marginVertical: 30,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  active: {backgroundColor: "#3FC060"},
  buttonText: {
    color: "white",
    paddingVertical: 15,
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
