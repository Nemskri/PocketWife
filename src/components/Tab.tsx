import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Home from "../Screens/Home";
import Insights from "../Screens/Insights";
import Options from "../Screens/Options";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

function Tab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          if (route.name === "Home") {
            iconSource = require("../assets/icons/Home.png");
          } else if (route.name === "Settings") {
            iconSource = require("../assets/icons/SettingsIcon.png");
          } else {
            iconSource = require("../assets/icons/INsightsIcon.png");
          }
          return <Image source={iconSource} />;
        },
        tabBarStyle: {
          height: Platform.OS === "ios" ? hp(10) : hp(10),
          borderTopWidth: 0,
          backgroundColor: "#ffffff",
          elevation: 5,
        },
        tabBarIconStyle: { marginBottom: hp(1), top: hp(1) },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingVertical: hp(0.5),
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#36364D",
      })}
    >
      <Tab.Screen
        name="Insight"
        component={Insights}
        options={{
          headerShown: false,
          tabBarLabel: "Insights",
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Options"
        component={Options}
        options={{
          headerShown: false,
          tabBarLabel: "Options",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: hp(100),
    width: wp(100),
    backgroundColor: "pink",
  },
});

export default Tab;
