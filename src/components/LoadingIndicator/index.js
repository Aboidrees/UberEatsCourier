
import React from 'react'
import { View, ActivityIndicator } from 'react-native'

export const LoadingIndicator = () => {
  return (
    <View>
      <ActivityIndicator size={"large"} color="#3FC060" style={{ flex: 1, alignItems: "center", justifyContent: "center" }} />
    </View>
  )
}