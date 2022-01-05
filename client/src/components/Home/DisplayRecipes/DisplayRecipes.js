import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteRecipes, filterBy, getRecipes, orderBy } from "../../../actions";
import Card from "./Card/Card";
import style from "./DisplayRecipes.module.css";
import Loading from '../../UI/Loading/Loading'

export const DisplayRecipes = () => {
  const { filter, type} = useParams();
  const { recipes } = useSelector((state) => state);
  const NUM_PAGES = 9;
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(filter === "order") return dispatch(orderBy(type));
    if (filter) {
       dispatch(deleteRecipes());
       dispatch(filterBy(filter, type));
       return;
     }
     dispatch(getRecipes());
   }, [dispatch, filter, type]);

    const [currentPage, setCurrentPage] = useState(0);
    const recipesPages = (recipe) => {
      return recipe?.slice(currentPage, currentPage + NUM_PAGES);
    };
    const nextPage = () => {
      if (recipes.length > currentPage + NUM_PAGES) {
        setCurrentPage(currentPage + NUM_PAGES);
      }
    };
    const prevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - NUM_PAGES);
      }
    };

    if (recipes.length === 0) return <Loading />;

  return (
    <div className={style.gamesDisplay}>
      {recipes[0].msg ? (
        <div className={style.noFound_container}>
          <p>{recipes[0].msg}</p>
        </div>
      ) : (
        <div className={style.cards_container}>
          {recipesPages(recipes).map(({ id, name, image, diets }) => (
            <Card key={id} id={id} name={name} img={image} diets={diets} />
          ))}
        </div>
      )}

      <div className={style.buttons_container}>
        <button onClick={prevPage}>Previuos</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
};
