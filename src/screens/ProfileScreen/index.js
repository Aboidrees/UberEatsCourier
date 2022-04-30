import React, {useState} from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Fontisto} from "@expo/vector-icons";
import {Auth, DataStore} from "aws-amplify";

import {useAuthContext} from "../../context";
import {Courier} from "../../models";

const TransportationModes = {
  DRIVING: "DRIVING",
  BICYCLING: "BICYCLING",
};

export const ProfileScreen = () => {
  const {sub, setDbCourier, dbCourier} = useAuthContext();
  const [name, setName] = useState(dbCourier?.name || "");
  const [transportationMode, setTransportationMode] = useState(
    TransportationModes.DRIVING
  );

  const onSave = async () =>
    dbCourier
      ? (await updateCourier()) && Alert.alert("", "Updated")
      : (await createCourier()) && Alert.alert("", "Saved");

  const createCourier = async () => {
    try {
      const courier = await DataStore.save(
        new Courier({name, sub, transportationMode})
      );

      setDbCourier(courier);
    } catch (e) {
      Alert.alert("Error", e.message);
    }
  };

  const updateCourier = async () => {
    const courier = await DataStore.save(
      Courier.copyOf(dbCourier, (updated) => {
        updated.name = name;
        updated.transportationMode = transportationMode;
      })
    );
    setDbCourier(courier);
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Profile</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />
      <View style={styles.transPContainer}>
        <Pressable
          onPress={() => setTransportationMode(TransportationModes.DRIVING)}
          style={[
            styles.transPButton,
            transportationMode === TransportationModes.DRIVING &&
            styles.accentColor,
          ]}
        >
          <Fontisto name="car" size={60} color="white"/>
        </Pressable>

        <Pressable
          onPress={() => setTransportationMode(TransportationModes.BICYCLING)}
          style={[
            styles.transPButton,
            transportationMode === TransportationModes.BICYCLING &&
            styles.accentColor,
          ]}
        >
          <Fontisto name="motorcycle" size={60} color="white"/>
        </Pressable>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.accentColor]}
        onPress={onSave}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Auth.signOut()} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
  },
  transPContainer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-evenly",
  },
  transPButton: {
    width: 100,
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  button: {
    alignItems: "center",
    color: "white",
    padding: 12,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "lightgrey",
  },
  accentColor: {backgroundColor: "#3FC060"},
  buttonText: {fontSize: 17, color: "white"},
});
