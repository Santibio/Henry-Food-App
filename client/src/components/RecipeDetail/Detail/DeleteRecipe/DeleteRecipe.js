import React from "react";
import {
  deleteRecipes,
} from "../../../../actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from './DeleteRecipe.module.css'

export const DeleteRecipe = ({id}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteRecipeHandler = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      axios
        .delete(`http://localhost:3001/api/recipe/${id}`)
        .then((response) => {
          alert(response.data.msg);
          dispatch(deleteRecipes());
          history.push("/home");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div className={style.deleteRecipeContainer}>
      <button onClick={deleteRecipeHandler}>DELETE</button>
    </div>
  );
};
