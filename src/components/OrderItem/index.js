import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";



export const OrderItem = ({ order }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Order Delivery", { id: order?.id })}

      style={styles.handleIndicator}>

      <Image source={{ url: order.Restaurant.image }}
        style={{ width: "25%", height: "100%", borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />

      <View style={{ flex: 1, marginLeft: 10, paddingVertical: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>{order.Restaurant.name}</Text>
        <Text style={{ color: "grey" }}>{order.Restaurant.address}</Text>

        <Text style={{ marginTop: 10, fontWeight: "bold" }}>Delivery Details:</Text>
        <Text style={{ color: "grey" }}>{order.User.name}</Text>
        <Text style={{ color: "grey" }}>{order.User.address}</Text>
      </View>
      <View style={{ padding: 5, backgroundColor: "#3Fc060", borderBottomRightRadius: 10, borderTopRightRadius: 10, alignItems: "center", justifyContent: "center" }}>
        <Entypo name='check' size={30} color="white" style={{ marginLeft: "auto" }} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleIndicator: { flexDirection: "row", margin: 10, borderColor: "#3Fc060", borderWidth: 2, borderRadius: 14, justifyContent: "space-between" }
});
