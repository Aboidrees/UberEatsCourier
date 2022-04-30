import React from "react";
import {Text, View, ActivityIndicator} from "react-native";

export const LoadingIndicator = ({text}) => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <ActivityIndicator size={"large"} color="#3FC060"/>
      <Text style={{color: "#3FC060", marginTop: 10, marginStart: 20}}>
        {text || "Loading ..."}
      </Text>
    </View>
  );
};
