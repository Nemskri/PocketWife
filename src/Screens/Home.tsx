import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import { userDataType } from "../services/redux";
import ExpenseForm from "../components/ExpenseForm";

function Home({ navigation }) {
  type Rootstate = {
    userData: userDataType;
  };

  const userData = useSelector((state: Rootstate) => state.userData);
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={"black"} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.balanceCard}>
          <Text
            style={{
              fontSize: hp(3.5),
              fontFamily: "Lora-Bold",
              color: "#FC7FB6",
            }}
          >
            Account Balance
          </Text>
          <Text
            style={{
              fontSize: hp(5),
              fontFamily: "Lora-Bold",
              color: "white",
            }}
          >
            ₹ {userData.currentBalance}
          </Text>
          <View style={styles.cardButtons}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "lightgreen" }]}
            >
              <Text
                style={{
                  fontSize: hp(2),
                  fontFamily: "Lora-bold",
                  color: "black",
                }}
              >
                Monthly Income
              </Text>
              <Text
                style={{
                  fontSize: hp(3),
                  fontFamily: "Lora-bold",
                  color: "black",
                }}
              >
                + ₹ {userData.income}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "red" }]}
              onPress={() => setShowExpenseForm((prev) => !prev)}
            >
              <Text>Add Your Expense</Text>
            </TouchableOpacity>
          </View>
        </View>
        {showExpenseForm && <ExpenseForm />}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    height: hp(100),
    width: wp(100),
    backgroundColor: "#B80257",
  },
  scrollContainer: {
    height: hp(10),
    width: wp(100),
    // backgroundColor: "white",
    alignSelf: "center",
  },
  balanceCard: {
    backgroundColor: "black",
    height: hp(25),
    display: "flex",
    alignItems: "center",
  },
  cardButtons: {
    width: wp(100),
    height: hp(10),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: wp(30),
    height: hp(8),
    borderRadius: wp(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
