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
  ToastAndroid,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { clearPin, killStore, storePin, userDataType } from "../services/redux";
import Toast from "../components/Toast";

type RootState = {
  pin: number | null;
  newUser: boolean;
  userData: userDataType;
};

export default function LockScreen({ navigation }) {
  const [pin, setPin] = useState(null);
  const [pinFlag, setPinFlag] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const securityPin = useSelector((state: RootState) => state.pin);
  const isNewUSer = useSelector((state: RootState) => state.newUser);
  const userData = useSelector((state: RootState) => state.userData);

  const handleChange = (text: string) => {
    setPin(text);
  };

  const validatePin = () => {
    if (securityPin) {
      if (securityPin === pin) {
        userData.userName === undefined
          ? navigation.navigate("InfoScreen")
          : navigation.navigate("Tab");
      } else {
        setError(true);
      }
    } else {
      setSuccess(true);
      dispatch(storePin(pin));
    }
    setPin("");
  };

  useEffect(() => {
    securityPin !== null ? setPinFlag(true) : setPinFlag(false);
    // dispatch(killStore()); //!This will Clear the Redux Store
  }, [pinFlag, securityPin]);

  useEffect(() => {
    setTimeout(() => {
      error && setError(false);
      success && setSuccess(false);
    }, 2000);
  }, [error, success]);

  return (
    <ImageBackground source={require("../assets/images/bg.jpg")}>
      <StatusBar backgroundColor={"purple"} />
      <View style={styles.container}>
        <View
          style={{
            width: wp(100),
            height: hp(100),
            position: "absolute",
          }}
        >
          {error && <Toast text="Incorrect Pin!" type="error" />}
          {success && <Toast text="New Pin Generated" type="success" />}
        </View>
        <Text numberOfLines={2} style={styles.h1Text}>
          {securityPin ? "Enter Security Pin" : "Let's Set Up Your New Pin!"}
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
    width: wp(60),
    color: "#FFEFDA",
    fontSize: hp(4),
    fontFamily: "Lora-Bold",
    textAlign: "center",
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
    fontFamily: "Lora-Bold",
    fontSize: wp(4.5),
    color: "#FFEFDA",
  },
});
