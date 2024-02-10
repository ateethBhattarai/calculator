import { StyleSheet, View } from "react-native";
import CalculatorButton from "./components/CalculatorButton";
import CalculatorValue from "./components/CalculatorValue";
import CalcContext from "./context/CalcContext";

export default function App() {
  return (
    <CalcContext>
      <View style={styles.container}>
        <CalculatorValue />
        <CalculatorButton />
      </View>
    </CalcContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 40,
    justifyContent: "space-evenly",
  },
});
