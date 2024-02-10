import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCalcValue } from "../context/CalcContext";
import {
  fifthRow,
  firstRow,
  fourthRow,
  secondRow,
  thirdRow,
} from "../utils/calculatorButtonData";

const CalculatorButton = () => {
  const { setCalcValue, calcValue } = useCalcValue();
  const [calcResult, setCalcResult] = useState(0);

  const handleButtonPress = (value, isNumber) => {
    if (value === "=") {
      evaluateExpression();
    } else if (value === "AC") {
      clearDisplay();
    } else if (value === "%") {
      calculatePercentage();
    } else if (calcValue === 0) {
      setCalcValue(value);
    } else {
      setCalcValue((prev) => prev + value);
    }
  };

  const evaluateExpression = () => {
    try {
      const result = eval(calcValue);
      setCalcValue(result);
      setCalcResult(result);
    } catch (error) {
      setCalcValue("Error");
    }
  };

  const calculatePercentage = () => {
    try {
      const result = eval(calcValue + "/100");
      setCalcValue(result);
      setCalcResult(result);
    } catch (error) {
      setCalcValue("Error");
    }
  };

  const clearDisplay = () => {
    setCalcValue(0);
    setCalcResult(0);
  };

  return (
    <View style={styles.calcButtonsContainer}>
      <View style={styles.calcRow}>
        {firstRow.map((first) => (
          <TouchableOpacity
            key={first.label}
            onPress={() => handleButtonPress(first.value, first.isNumber)}
          >
            <Text style={styles.calcButton}>{first.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.calcRow}>
        {secondRow.map((second) => (
          <TouchableOpacity
            key={second.label}
            onPress={() => handleButtonPress(second.value, second.isNumber)}
          >
            <Text style={styles.calcButton}>{second.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.calcRow}>
        {thirdRow.map((third) => (
          <TouchableOpacity
            key={third.label}
            onPress={() => handleButtonPress(third.value, third.isNumber)}
          >
            <Text style={styles.calcButton}>{third.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.calcRow}>
        {fourthRow.map((fourth) => (
          <TouchableOpacity
            key={fourth.label}
            onPress={() => handleButtonPress(fourth.value, fourth.isNumber)}
          >
            <Text style={styles.calcButton}>{fourth.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.calcRow}>
        {fifthRow.map((fifth) => (
          <TouchableOpacity
            key={fifth.label}
            onPress={() => handleButtonPress(fifth.value, fifth.isNumber)}
          >
            <Text style={styles.calcButton}>{fifth.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CalculatorButton;

const styles = StyleSheet.create({
  calcButtonsContainer: {
    padding: 10,
    marginTop: 10,
    flex: 2,
    height: "100%",
  },
  calcRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  calcButton: {
    fontSize: 35,
    padding: 10,
    minWidth: 100,
    textAlign: "center",
  },
});
