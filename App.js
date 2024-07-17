import {Amplify} from "aws-amplify";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {withAuthenticator} from "@aws-amplify/ui-react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";

import {AuthContextProvider, OrderContextProvider} from "./src/context";
import AmplifyConfig from "./src/amplifyconfiguration.json";
import {Navigation} from "./src/navigation";

Amplify.configure(AmplifyConfig);

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <AuthContextProvider>
          <OrderContextProvider>
            <Navigation/>
          </OrderContextProvider>
        </AuthContextProvider>
      </GestureHandlerRootView>
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
