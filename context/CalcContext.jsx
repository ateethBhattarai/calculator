import React, { createContext, useContext, useState } from "react";

const CalculatorContext = createContext(null);

const CalcContext = ({ children }) => {
  const [calcValue, setCalcValue] = useState(0);
  return (
    <CalculatorContext.Provider value={{ calcValue, setCalcValue }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalcValue = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error("useCalcValue must be used within CalcContext");
  }
  return context;
};

export default CalcContext;
