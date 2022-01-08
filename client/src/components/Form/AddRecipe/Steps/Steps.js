import React, { useEffect, useState } from "react";
import style from "./Steps.module.css";

const Steps = ({ addStepsToValues }) => {
  const [addSteps, setAddSteps] = useState([]);
  const [step, setStep] = useState("");

  const stepHandler = (e) => {
    setStep(e.target.value);
  };

  useEffect(() => {
    addStepsToValues(addSteps);
  }, [addStepsToValues]);


  const addStepHandler = (e) => {
    e.preventDefault();
    if (step.trim().length > 0) {
      setAddSteps((prev) => [...prev, { number: prev.length + 1, step }]);
/* 
      addStepsToValues(addSteps); */
      setStep("");
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
          {addSteps.map((s) => (
            <li key={s.number}>{s.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Steps;
