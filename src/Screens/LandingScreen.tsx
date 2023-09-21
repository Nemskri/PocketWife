import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

function LandingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Tab");
    }, 5000);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/LandingScreen.jpg")}
      height={hp(100)}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"#E6D4D1"} />
        <Text style={styles.text}>It's your</Text>
        <Text style={styles.textColored}>Money</Text>
        <Text style={styles.text}>Own it.</Text>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    width: wp(80),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 0,
    padding: 0,
    position: "relative",
  },
  text: {
    fontFamily: "Lora-Bold",
    fontSize: hp(8),
    color: "#56413d",
  },
  textColored: {
    fontFamily: "Lora-Bold",
    fontSize: hp(9),
    color: "green",
  },
  btn: {
    position: "absolute",
    bottom: 0,
    width: wp(100),
    alignItems: "flex-end",
    padding: wp(2),
    backgroundColor: "rgba(128, 255, 0, 0.5)",
  },
  textBtn: {
    fontSize: hp(8),
    color: "black",
    fontWeight: "700",
  },
});

export default LandingScreen;
