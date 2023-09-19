import React from "react";
import { Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

function ExpenseForm() {
  return (
    <View
      style={{
        height: heightPercentageToDP(50),
        width: widthPercentageToDP(100),
      }}
    >
      <Text>Add Monthly Expense</Text>
    </View>
  );
}

export default ExpenseForm;
