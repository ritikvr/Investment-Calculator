import React, { useState } from "react";
import "./NewInvestmentForm.css";

function NewinvestmentForm(props) {
  const [currentSaving, setCurrentSaving] = useState("10000");
  const [yearlySaving, setYearlySaving] = useState("1200");
  const [Interest, setInterest] = useState("5");
  const [duration, setDuration] = useState("10");

  function CurrentSavingHandler(event) {
    setCurrentSaving(event.target.value);
  }
  function yearlySavingHandler(event) {
    setYearlySaving(event.target.value);
  }
  function InterestHandler(event) {
    setInterest(event.target.value);
  }
  function DurationHandler(event) {
    setDuration(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const InvestmentData={
      currentSaving:currentSaving,
      yearlySaving:yearlySaving,
      interest:Interest,
      duration:duration
    }
    props.onAddInvestment(InvestmentData);
  }
  function resetHandler(){
    setCurrentSaving("10000");
    setYearlySaving("1200");
    setInterest("5");
    setDuration("10");
  }
  return (
    <div className="new-form">
      <form onSubmit={submitHandler} onReset={resetHandler}>
        <div className="new-form-inputs">
          <div className="new-form-inputs__input">
            <label>current savings($)</label>
            <input
              type="number"
              value={currentSaving}
              onChange={CurrentSavingHandler}
            ></input>
          </div>
          <div className="new-form-inputs__input">
            <label>yearly savings($)</label>
            <input
              type="number"
              value={yearlySaving}
              onChange={yearlySavingHandler}
            ></input>
          </div>
          <div className="new-form-inputs__input">
            <label>Expected Interest(%,per year)</label>
            <input
              type="number"
              value={Interest}
              onChange={InterestHandler}
            ></input>
          </div>
          <div className="new-form-inputs__input">
            <label>Investment Duration(years)</label>
            <input
              type="number"
              value={duration}
              onChange={DurationHandler}
            ></input>
          </div>
        </div>
        <div className="new-form-buttons">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>
    </div>
  );
}
export default NewinvestmentForm;
