import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface HeaderProps {
  navigation: any;
  headerText: string;
}

const Header: React.FC<HeaderProps> = ({ navigation, headerText }) => {
  return (
    <View style={[styles.header]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../assets/icons/BackBtn")}
          style={{ width: wp(10), height: wp(10) }}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: hp(2),
    zIndex: 1,
    height: hp(10),
  },
  headerText: {
    fontSize: hp(4),
    color: "white",
    width: wp(90),
    fontFamily: "Lora-Bold",
  },
});

export default Header;
