import { formatter } from "../util/investment";
export default function InvestmentResult({ annualData }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearInfo, index) => {
          // Custom logic before returning the JSX
          const investmentValue = yearInfo.valueEndOfYear;
          const interest = yearInfo.interest;
          const totalInterest = yearInfo.totalInterest;
          const investedCapital =
            yearInfo.valueEndOfYear -
            (index > 0 ? totalInterest : yearInfo.interest);
          return (
            <tr key={yearInfo.index}>
              <td>{yearInfo.year}</td>
              <td>{formatter.format(investmentValue)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
