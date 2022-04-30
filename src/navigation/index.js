import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {OrdersScreen, OrderDeliveryScreen, ProfileScreen} from "../screens";
import {useAuthContext} from "../context";
import {LoadingIndicator} from "../components";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const {dbCourier, loading} = useAuthContext();

  if (loading) return <LoadingIndicator text={"starting..."}/>;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {dbCourier ?
        (
          <>
            <Stack.Screen name="Orders" component={OrdersScreen}/>
            <Stack.Screen name="Order Delivery" component={OrderDeliveryScreen}/>
          </>
        )
        :
        (
          <Stack.Screen name="Profile" component={ProfileScreen}/>
        )
      }
    </Stack.Navigator>
  );
};
