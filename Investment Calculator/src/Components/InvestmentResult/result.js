import React from "react";
import YearlyResult from "./yearlyResult";
import "./result.css";

function Result(props) {
  return (
    <div className="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <YearlyResult yearlyData={props.yearlyData}></YearlyResult>
      </table>
    </div>
  );
}
export default Result;
