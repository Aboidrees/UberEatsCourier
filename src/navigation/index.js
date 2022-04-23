import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrdersScreen, OrderDeliveryScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Orders" component={OrdersScreen} />
    <Stack.Screen name="Order Delivery" component={OrderDeliveryScreen} />
  </Stack.Navigator>
);