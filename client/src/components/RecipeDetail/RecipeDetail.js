import React from "react";
import style from './RecipeDetail.module.css'
import Circle from "../UI/Circle/Circle";
import Glass from "../UI/Glass/Glass";
import Main from "../UI/Main/Main";
import {Detail} from "./Detail/Detail";

export const RecipeDetail = () => {
  return (
    <Main>
      <Glass>
        <div className={style.recipeDetailContainer}>
          <Detail />
        </div>
      </Glass>
      <Circle top="-2%" right="1%" size="3rem" color="#3654d1" />
      <Circle top="2%" left="10%" size="5rem" color="#bdc7ed" />
      <Circle bottom="50%" left="-2%" size="4rem" color="#3654d1" />
      <Circle bottom="23%" right="2%" size="1rem" color="#3654d1" />
    </Main>
  );
};
