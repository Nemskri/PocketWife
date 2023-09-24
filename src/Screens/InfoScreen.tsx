import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import {
  BankAccount,
  CurrentBalance,
  Income,
  UserName,
  userDataType,
} from "../services/redux";

const InfoScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [income, setIncome] = useState("");

  type RootState = {
    userData: userDataType;
  };

  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userData);

  const setName = (text: string) => {
    setUserName(text);
  };
  const setBank = (text: string) => {
    setBankAccount(text);
  };
  const setBalance = (text: string) => {
    setCurrentBalance(text);
  };
  const setMonthlyIncome = (text: string) => {
    setIncome(text);
  };

  const handleSubmit = () => {
    if (userName && bankAccount && currentBalance && income) {
      dispatch(UserName(userName));
      dispatch(BankAccount(bankAccount));
      dispatch(CurrentBalance(currentBalance));
      dispatch(Income(income));
      navigation.navigate("Tab");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} headerText={"Enter Your Basic Info"} />
      <View style={styles.form}>
        <View
          style={{
            display: "flex",
            rowGap: hp(5),
          }}
        >
          <View>
            <Text style={styles.label}>Enter your Name:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={userName}
              placeholder={userData.userName || "Name"}
            />
          </View>
          <View>
            <Text style={styles.label}>Bank Account:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setBank}
              value={bankAccount}
              placeholder={userData.bankAccount || "Bank Account Name/No."}
            />
          </View>

          <View>
            <Text style={styles.label}>Current Balance:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setBalance}
              value={currentBalance}
              keyboardType="numeric"
              placeholder={
                userData?.currentBalance?.toString() || "Enter Balance"
              }
            />
          </View>
          <View>
            <Text style={styles.label}>Monthly Income:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setMonthlyIncome}
              value={income}
              keyboardType="numeric"
              placeholder={
                userData?.income?.toString() || "Enter monthly Income"
              }
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text
            style={{
              color: "white",
              fontFamily: "Lora-Bold",
              fontSize: wp(6),
            }}
          >
            SUBMIT
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FC7FB6",
  },
  form: {
    height: hp(88),
    padding: wp(5),
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    color: "white",
    fontFamily: "Lora-Bold",
    fontSize: wp(5),
    marginBottom: hp(1),
  },
  input: {
    height: hp(7),
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    color: "black",
    backgroundColor: "white",
    fontFamily: "Lora-Bold",
    fontSize: hp(3),
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  submitBtn: {
    backgroundColor: "#B80257",
    paddingVertical: hp(2),
    borderRadius: wp(10),
    alignSelf: "center",
    width: wp(90),
    alignItems: "center",
  },
});

export default InfoScreen;
