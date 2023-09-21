import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Insights from "../Screens/Insights";
import Home from "../Screens/Home";
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
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === "Home") {
            iconSource = require("../assets/icons/Home.png");
          } else if (route.name === "Settings") {
            iconSource = require("../assets/icons/SettingsIcon.png");
          } else {
            iconSource = require("../assets/icons/InsightsIcon.png");
          }
          return (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: wp(15),
                height: hp(8),
              }}
            >
              <Image
                style={{
                  width: wp(7),
                  height: wp(7),
                  tintColor: focused ? "pink" : "gray",
                }}
                source={iconSource}
              />
            </View>
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
          paddingBottom: hp(1),
          textTransform: "uppercase",
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
