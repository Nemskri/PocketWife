import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { clearPin, killStore, storePin, userDataType } from "../services/redux";

type RootState = {
  pin: number | null;
  newUser: boolean;
  userData: userDataType;
};

export default function LockScreen({ navigation }) {
  const [pin, setPin] = useState(null);
  const [pinFlag, setPinFlag] = useState(false);
  const dispatch = useDispatch();
  const securityPin = useSelector((state: RootState) => state.pin);
  const isNewUSer = useSelector((state: RootState) => state.newUser);
  const userData = useSelector((state: RootState) => state.userData);

  const handleChange = (text: string) => {
    setPin(text);
  };

  console.log({ userData });

  const validatePin = () => {
    if (securityPin) {
      if (securityPin === pin) {
        userData.userName === ""
          ? navigation.navigate("InfoScreen")
          : navigation.navigate("Tab");
      }
    } else {
      dispatch(storePin(pin));
    }
    setPin("");
  };

  useEffect(() => {
    console.log({ securityPin });
    securityPin !== null ? setPinFlag(true) : setPinFlag(false);
    // dispatch(killStore()); //!This will Clear the Redux Store
  }, [pinFlag, securityPin]);

  return (
    <ImageBackground source={require("../assets/images/bg.jpg")}>
      <StatusBar backgroundColor={"purple"} />
      <View style={styles.container}>
        <Text style={styles.h1Text}>
          {securityPin ? "Enter Security Pin" : "Generate New Pin"}
        </Text>
        <TextInput
          style={styles.input}
          value={pin}
          keyboardType="number-pad"
          maxLength={6}
          secureTextEntry
          onChangeText={handleChange}
          onSubmitEditing={validatePin}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={validatePin}>
            <Text style={styles.btnText}>SUBMIT PIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={pinFlag ? styles.button : styles.btnDisabled}
            onPress={() => {
              dispatch(clearPin());
              console.log("Reset");
            }}
            disabled={securityPin === null && true}
            activeOpacity={1}
          >
            <Text style={styles.btnText}>RESET PIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: hp(100),
    fontSize: hp(5),
    rowGap: hp(5),
  },
  h1Text: {
    color: "#FFEFDA",
    fontSize: hp(4),
  },
  input: {
    height: hp(5),
    width: wp(80),
    textAlign: "center",
    fontSize: hp(3.5),
    borderColor: "pink",
    borderWidth: wp(0.1),
    borderRadius: wp(4),
    color: "#FFEFDA",
  },
  button: {
    backgroundColor: "purple",
    width: wp(40),
    height: wp(10),
    borderRadius: wp(5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2),
  },
  btnDisabled: {
    opacity: 0.5,
    backgroundColor: "purple",
    width: wp(40),
    height: wp(10),
    borderRadius: wp(5),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2),
  },
  btnText: {
    fontSize: wp(4),
    fontWeight: "700",
    color: "#FFEFDA",
  },
});
