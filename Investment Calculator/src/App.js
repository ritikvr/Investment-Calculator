import React, { useState } from "react";
import Header from "./Components/Header/header";
import NewinvestmentForm from "./Components/NewInvestment/NewInvestmentForm";
import Result from "./Components/InvestmentResult/result";

function App() {
  const [result, setResult] = useState(null);
  const yearlyData = [];

  function AddInvestmentHandler(enteredInvestmentData) {
    let currentSavings = +enteredInvestmentData.currentSaving;
    const yearlySaving = +enteredInvestmentData.yearlySaving;
    const interest = +enteredInvestmentData.interest / 100;
    const duration = +enteredInvestmentData.duration;
    let investedCapital = currentSavings;
    for (let i = 0; i < duration; i++) {
      let yearlyInterest = currentSavings * interest;
      currentSavings += yearlyInterest + yearlySaving;
      investedCapital += yearlySaving;
      yearlyData.push({
        year: i + 1,
        totalSavings: currentSavings,
        yearlyInterest: yearlyInterest,
        investedCapital: investedCapital,
      });
    }
    setResult(yearlyData);
  }

  return (
    <div>
      <Header></Header>
      <NewinvestmentForm
        onAddInvestment={AddInvestmentHandler}
      ></NewinvestmentForm>
      {result ? (
        <Result yearlyData={result}></Result>
      ) : (
        <p style={{ textAlign: "center" }}>No investment found</p>
      )}
    </div>
  );
}

export default App;
