import React, { useEffect } from "react";
import Circle from "../UI/Circle/Circle";
import Glass from "../UI/Glass/Glass";
import Main from "../UI/Main/Main";
import { DisplayRecipes } from "./DisplayRecipes/DisplayRecipes";
import { Filters } from "./Filters.js/Filters";
import style from "./Home.module.css";
import { Search } from "./Search/Search";
import { Title } from "./Title/Title";
import salad from "../../img/salad.png";
import cake from "../../img/cake2.webp";
import {useDispatch} from 'react-redux'
import { getRecipes } from "../../actions";
import { Switch,Route } from "react-router-dom";


export const Home = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch]);

  return (
    <div>
      <Main c1="#eee4be" c2="#f1c5bb">
        <Glass width="80%">
          <div className={style.homeContainer}>
            <div className={style.title}>
              <Title>Recipes</Title>
            </div>
            <div className={style.search}>
              <Search />
            </div>
            <div className={style.filters}>
              <Filters />
            </div>
            <div className={style.displayRecipes}>
              <Switch>
                <Route exact path="/home" component={DisplayRecipes} />
                <Route path="/home/:filter/:type" component={DisplayRecipes} />
              </Switch>
            </div>
            <img className={style.img1} src={salad} alt="" />
            <img className={style.img2} src={cake} alt="" />
          </div>
        </Glass>
        <Circle top="-2%" right="1%" size="3rem" color="#3654d1" />
        <Circle top="2%" left="10%" size="5rem" color="#bdc7ed" />
        <Circle bottom="50%" left="-2%" size="4rem" color="#3654d1" />
        <Circle bottom="23%" right="2%" size="1rem" color="#3654d1" />
      </Main>
    </div>
  );
};
