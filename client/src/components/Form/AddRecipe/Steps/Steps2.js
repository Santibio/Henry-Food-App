import React, { useState } from "react";
import style from "./Steps.module.css";

const Steps = ({ values, stepsHandler,deleteStepsHandler }) => {
  const { steps } = values;
  const [step, setStep] = useState("");
 /*  const [editable,setEditable] = useState(false) */

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
    }}
/*   };
const editableHandler = (e,number,value)=>{
  e.preventDefault()
 if (!editable) {
   setEditable(true)
 }else{
   stepsHandler(e.target.previousSibling.innerText);
 }
} */
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
            <div key={s.number} className={style.listContainer}>
              <li id={s.number}>{s.step}</li>
        
              <button
                onClick={(e) =>
                  deleteStepsHandler(e, parseInt(e.target.previousSibling.id))
                }
              >
               Delete
              </button>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Steps;
