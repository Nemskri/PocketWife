import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface HeaderProps {
  navigation: any;
  headerText: string;
  backgroundColor?: string;
}

const xml = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.67 1.87001L8.9 0.100006L-1 10L8.9 19.9L10.67 18.13L2.54 10L10.67 1.87001Z" fill="#D9D9D9"/>
</svg>`;

const Header: React.FC<HeaderProps> = ({
  navigation,
  headerText,
  backgroundColor,
}) => {
  return (
    <View style={[styles.header, { backgroundColor: backgroundColor }]}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../assets/images/Back.png")}
          style={{ height: hp(3), width: hp(3) }}
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
    columnGap: hp(2),
  },
  headerText: {
    fontSize: hp(4),
    color: "white",
    width: wp(90),
    fontFamily: "Lora-Bold",
  },
});

export default Header;
