import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { withAuthenticator } from "aws-amplify-react-native";
import { StatusBar } from "expo-status-bar";
import { Amplify } from "aws-amplify";
import { Navigation } from "./src/navigation";
import { AuthContextProvider, OrderContextProvider } from "./src/context";
import awsconfig from "./src/aws-exports";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContextProvider>
          <OrderContextProvider>
            <Navigation />
          </OrderContextProvider>
        </AuthContextProvider>
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
