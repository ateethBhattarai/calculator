import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useCalcValue } from "../context/CalcContext";

const CalculatorValue = () => {
  const { calcValue } = useCalcValue();
  return (
    <View
      style={{
        flex: 2,
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <ScrollView style={{ borderWidth: 1, width: "100%" }}>
        <Text style={{ fontSize: 75, padding: 20 }}>{calcValue}</Text>
      </ScrollView>
    </View>
  );
};

export default CalculatorValue;
