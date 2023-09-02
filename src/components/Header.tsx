import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface HeaderProps {
  navigation: any;
  headerText: string;
  backgroundColor: string;
}

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
        <Image source={require("../assets/icons/back.png")} />
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
    paddingVertical: hp(1),
    zIndex: 1,
  },
  headerText: {
    fontSize: wp(6),
    fontWeight: "600",
    color: "#212126",
    width: wp(90),
  },
});

export default Header;
