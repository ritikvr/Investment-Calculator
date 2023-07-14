import React from "react";
import "./result.css";

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function YearlyResult(props) {
  return (
    <tbody>
      {props.yearlyData.map((Data) => (
        <tr key={Data.year}>
          <th>{Data.year}</th>
          <th>{formatter.format(Data.totalSavings)}</th>
          <th>{formatter.format(Data.yearlyInterest)}</th>
          <th>{formatter.format(Data.totalSavings - Data.investedCapital)}</th>
          <th>{formatter.format(Data.investedCapital)}</th>
        </tr>
      ))}
    </tbody>
  );
}
export default YearlyResult;
