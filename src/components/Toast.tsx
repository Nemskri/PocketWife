import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface ToastProps {
  text: string;
  type: "error" | "warning" | "success";
}

const Toast: React.FC<ToastProps> = ({ text, type }) => {
  return (
    <View
      style={[
        styles.toast,
        {
          backgroundColor:
            type === "error" ? "rgba(255, 0, 0, 0.1)" : "#C8E6C9",
          borderColor: type === "error" ? "rgba(255, 0, 0, 0.8)" : "#006400",
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: type === "success" ? "black" : "white",
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Toast;

const styles = StyleSheet.create({
  toast: {
    width: wp(95),
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: wp(0.5),
    borderRadius: 8,
    marginHorizontal: wp(2.5),
    marginBottom: hp(2),
    elevation: 5,
    position: "absolute",
    top: hp(5),
  },
  text: {
    fontFamily: "Lora-Bold",
    fontSize: hp(2.5),
    textAlign: "center",
  },
});
