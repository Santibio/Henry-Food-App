import React from "react";
import { AddRecipe } from "./AddRecipe/AddRecipe";
import Circle from "../UI/Circle/Circle";
import Glass from "../UI/Glass/Glass";
import Main from "../UI/Main/Main";
import pizza from "../../img/pizza1.png";
import cake from "../../img/cake2.webp";
import style from "./Form.module.css";

export const Form = () => {
  return (
    <Main>
      <Glass>
        <div className={style.formContainer}>
          <AddRecipe />
        </div>
      </Glass>
      <img src={pizza} alt="" className={style.img1} />
      <img src={cake} alt="" className={style.img2} />
      <Circle top="-2%" right="1%" size="3rem" color="#3654d1" />
      <Circle top="2%" left="10%" size="5rem" color="#bdc7ed" />
      <Circle bottom="50%" left="-2%" size="4rem" color="#3654d1" />
      <Circle bottom="23%" right="2%" size="1rem" color="#3654d1" />
    </Main>
  );
};
