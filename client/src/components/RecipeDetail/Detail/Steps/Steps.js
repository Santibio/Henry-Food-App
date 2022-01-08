import React from "react";
import { useSelector } from "react-redux";
import style from './Steps.module.css'

const Steps = () => {
  const { recipeDetail } = useSelector((state) => state);
  const { steps } = recipeDetail;
  return (
    <>
      {steps && <h2 className={style.stepTitle}>Steps</h2>}
      <ol className={style.gradient_list}>
        {steps?.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </>
  );
};

export default Steps;
