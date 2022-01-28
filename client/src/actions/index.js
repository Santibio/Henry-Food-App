import axios from 'axios'

/* Defino los types */
export const GET_RECIPES = "GET_RECIPES";
export const DELETE_RECIPES = "DELETE_RECIPES";
export const DELETE_RECIPE_DETAIL = "DELETE_RECIPE_DETAIL";
export const FILTER_BY = "FILTER_BY";
export const GET_DIETS = "GET_DIETS";
export const ORDER_BY = "ORDER_BY";
export const SEARCH_RECEPI = "SEARCH_RECEPI";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const ERROR = "ERROR";

const URL = "https://localhost:3001";
/* const URL = "https://pi-food-api-back.herokuapp.com"; */ //DEPLOYED URL
/* Actions: */
export function getRecipes(history){
    return async function(dispatch){
      try{
        const response = await axios.get(`${URL}/recipes`);

        dispatch({ type: GET_RECIPES, payload: response.data});
      }catch(error){
        alert(error + ". Please change de api key")
        history.push("/404")
      }
  }
}

export function deleteRecipes(){
    return { type: DELETE_RECIPES, payload: []};
}

export function deleteRecipeDetail() {
  return { type: DELETE_RECIPE_DETAIL, payload: {} };
}

export function getDiets(history) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/types`)
      dispatch({ type: GET_DIETS, payload: response.data });
    } catch (error) {
      alert(error + ". Please change de api key");
      history.push("/404");
    }
  };
}

export function filterBy(filter, type, history) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${URL}filter?${filter}=${type}`
      );
      dispatch({ type: FILTER_BY, payload: response.data });
    } catch (error) {
      alert(error + ". Please change de api key");
      history.push("/404");
    }
  };
}

export function orderBy(action) {
  console.log(action)
  return { type: ORDER_BY, payload: action };
}

export function searchRecepi(recepi, history) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${URL}/recipes?name=${recepi}`
      );
      dispatch({ type: SEARCH_RECEPI, payload: response.data });
    } catch (error) {
      alert(error + ". Please change de api key");
      history.push("/404");
    }
  };
}

export function getRecipeByID(id,history) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `${URL}/recipes/${id}`
      );
      dispatch({ type: GET_RECIPE_BY_ID, payload: response.data });
      
    } catch (error) {
       alert(error + ". Please change de api key");
       history.push("/404");
    }
  };
}