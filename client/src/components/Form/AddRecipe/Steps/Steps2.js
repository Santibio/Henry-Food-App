import React, { useState } from "react";
import style from "./Steps.module.css";

const Steps = ({ values, stepsHandler }) => {
  const { steps } = values;
  const [step, setStep] = useState("");

  const stepHandler = (e) => {
    setStep(e.target.value);
  };

  const addStepHandler = (e) => {
    e.preventDefault();
    if (step.trim().length > 0) {
      stepsHandler( step );
      setStep("")
    } else {
      alert("Step cannot be empty");
    }
  };

  return (
    <div>
      <div className={style.inputFormContainer}>
        <label>Steps</label>
        <div className={style.stepContainer}>
          <input type="text" onChange={stepHandler} value={step} />
          <button onClick={addStepHandler}>Add Step</button>
        </div>
        <ol>
          {steps.map((s) => (
            <li key={s.number}>{s.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Steps;
