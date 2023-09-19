import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Home from "../Screens/Home";
import Insights from "../Screens/Insights";
import Options from "../Screens/Options";
import { useDispatch, useSelector } from "react-redux";
import { userDataType } from "../services/redux";

function Tab() {
  type RootState = {
    userData: userDataType;
  };

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userData);

  useEffect(() => {
    console.log({ userData });
  }, []);

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
            iconSource = require("../assets/icons/InsightsIcon.png");
          }
          return (
            <Image
              style={{
                width: focused ? wp(11) : wp(8),
                height: focused ? wp(11) : wp(8),
                tintColor: focused ? "white" : "black",
              }}
              source={iconSource}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: "#FC7FB6",
          height: hp(12),
          padding: hp(1),
          elevation: 5,
        },
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          fontSize: wp(3.5),
          padding: hp(1),
          fontFamily: "Lora-Bold",
        },
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen
        name="Insight"
        component={Insights}
        options={{
          headerShown: false,
          // tabBarLabel: "Insights",
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          // tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Options}
        options={{
          headerShown: false,
          // tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
}
export default Tab;
