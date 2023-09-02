import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import LandingScreen from "./src/Screens/LandingScreen";
import LockScreen from "./src/Screens/LockScreen";
import Tab from "./src/components/Tab";
import { persistor, store } from "./src/services/redux";

const Stack = createNativeStackNavigator();

const Router = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LockScreen" component={LockScreen} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Tab" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
