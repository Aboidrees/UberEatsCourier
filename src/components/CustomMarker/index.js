import React from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";

export const CustomMarker = ({ data, size, children }) => {
  const noChild = !React.isValidElement(children) || children === "";

  const { latitude, longitude, address, name } = data;
  const dimensions = size
    ? { width: size, height: size, borderRadius: size }
    : {borderRadius:30};
  return (
    <Marker
      coordinate={{ latitude, longitude }}
      title={name ?? ""}
      description={address ?? ""}
    >
      {noChild && <Entypo name="location-pin" size={48} color="#3FC060" />}
      {!noChild && (
        <View
          style={{
            ...styles.iconContainer,
            ...dimensions,
          }}
        >
          {children}
        </View>
      )}
    </Marker>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#3FC060",
    justifyContent: "center",
    alignItems: "center",
  },
});
