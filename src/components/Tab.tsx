import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Home from "../Screens/Home";
import Insights from "../Screens/Insights";
import Options from "../Screens/Options";

function Tab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          let colour;
          if (route.name === "Home") {
            iconSource = require("../assets/icons/Home.png");
          } else if (route.name === "Settings") {
            iconSource = require("../assets/icons/SettingsIcon.png");
          } else {
            iconSource = require("../assets/icons/InsightsIcon.png");
          }
          return (
            <Image
              style={{
                width: wp(10),
                height: wp(10),
                tintColor: focused ? "pink" : "gray",
              }}
              source={iconSource}
            />
          );
        },
        tabBarStyle: {
          height: hp(10),
          padding: hp(1),
          elevation: 5,
        },
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          fontSize: wp(4),
          padding: hp(1),
          fontFamily: "Lora-Bold",
        },
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "gray",
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
        name="Settings"
        component={Options}
        options={{
          headerShown: false,
          tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
}
export default Tab;
