import { useState } from "react";

export default function InvestmentInput({ onInputChange }) {
  const [initialInvestmentValue, setInitialInvestmentValue] = useState(0);
  const [annualInvestmentValue, setAnnualInvestmentValue] = useState(0);
  const [expectedReturnValue, setExpectedReturnValue] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const numericValue = value === "" ? 0 : parseFloat(value); // Convert to number

    // Update the corresponding state based on the input's name
    if (name === "initialInvestment") {
      setInitialInvestmentValue(numericValue);
    } else if (name === "annualInvestment") {
      setAnnualInvestmentValue(numericValue);
    } else if (name === "expectedReturn") {
      setExpectedReturnValue(numericValue);
    } else if (name === "duration") {
      setDuration(numericValue);
    }

    // Notify the parent component about the updated values
    onInputChange({
      initialInvestment:
        name === "initialInvestment" ? numericValue : initialInvestmentValue,
      annualInvestment:
        name === "annualInvestment" ? numericValue : annualInvestmentValue,
      expectedReturn:
        name === "expectedReturn" ? numericValue : expectedReturnValue,
      duration: name === "duration" ? numericValue : duration,
    });
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={initialInvestmentValue || ""}
            onInput={handleChange} // Use onInput instead of onChange
          />
        </div>
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={annualInvestmentValue || ""}
            onInput={handleChange} // Use onInput instead of onChange
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            value={expectedReturnValue || ""}
            onInput={handleChange} // Use onInput instead of onChange
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={duration || ""}
            onInput={handleChange} // Use onInput instead of onChange
          />
        </div>
      </div>
    </div>
  );
}
