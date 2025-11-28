import { useState } from "react";
import Headers from "./components/Header/Header";
import InvestmentInput from "./components/InvestmentInput";
import InvestmentResult from "./components/InvestmentResult";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [annualData, setAnnualData] = useState([]);
  const handleInputChange = (inputData) => {
    const result = calculateInvestmentResults({
      initialInvestment: inputData.initialInvestment,
      annualInvestment: inputData.annualInvestment,
      expectedReturn: inputData.expectedReturn,
      duration: inputData.duration,
    });
    console.log(inputData);
    console.log(result);
    setAnnualData(result);
  };
  return (
    <>
      <Headers></Headers>
      <InvestmentInput onInputChange={handleInputChange}></InvestmentInput>
      <InvestmentResult annualData={annualData}></InvestmentResult>
    </>
  );
}

export default App;
