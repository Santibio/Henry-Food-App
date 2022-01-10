import React from "react";
import { useSelector } from "react-redux";
import style from './Summary.module.css'

const Summary = () => {
  const { recipeDetail } = useSelector((state) => state);
  const { summary,score,healthScore } = recipeDetail;
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: summary }}></div> 
      <div className={style.scoreContainer}>
        <p>
          <span>Score: </span>
          {score}
        </p>
        <p>
          <span>Health Score: </span>
          {healthScore}
        </p>
      </div>
    </div>
  );
};

export default Summary;
