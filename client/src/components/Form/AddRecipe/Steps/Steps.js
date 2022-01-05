import React, { useEffect, useState } from "react";
import style from './Steps.module.css'

const Steps = ({ addStepsToValues }) => {
  const [addSteps, setAddSteps] = useState([]);
  const [step, setStep] = useState("");

  const stepHandler = (e) => {
    setStep(e.target.value);
  };

  useEffect(() => {
    addStepsToValues(addSteps);
  }, [addSteps]);

  const addStepHandler = (e) => {
    e.preventDefault()
    if (step.trim().length > 0){
      setAddSteps((prev) => [...prev, { number: prev.length + 1, step }]);
      setStep("");
    } else{
      alert("Step cannot be empty")
    }
  };



  return (
    <div>
      <div className={style.stepContainer}>
        <h2>Steps</h2>
        <input type="text" onChange={stepHandler} value={step} />
        <button onClick={addStepHandler}>Add step</button>
        <ol>
          {addSteps.map((s) => (
            <li key={s.number}>{s.step}</li>
          ))}
        </ol>
      </div>
      <button type="submit">Add new recipe</button>
    </div>
  );
};

export default Steps;
