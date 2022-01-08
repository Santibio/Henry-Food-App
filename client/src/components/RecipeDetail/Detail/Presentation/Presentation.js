import React from "react";
import { useSelector } from "react-redux";
import style from "./Presentation.module.css";
import {FiClock} from 'react-icons/fi'

const Presentation = () => {
  const { recipeDetail } = useSelector((state) => state);
  const {
    name,
    diets,
    readyInMinutes,
  } = recipeDetail;

  return (
    <>
      <h1>{name}</h1>
      <p className={style.diets}>
        {diets?.map((g) => (
          <span key={g}>{g} </span>
        ))}
      </p>
      <div className={style.readyContainer}>
        <h3>{readyInMinutes}</h3>
        <FiClock color="#426696" />
      </div>
    </>
  );
};

export default Presentation;
