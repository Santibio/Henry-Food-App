import axios from 'axios'

export const GET_RECIPES = "GET_RECIPES";
export const DELETE_RECIPES = "DELETE_RECIPES";
export const DELETE_RECIPE_DETAIL = "DELETE_RECIPE_DETAIL";
export const FILTER_BY = "FILTER_BY";
export const GET_DIETS = "GET_DIETS";
export const ORDER_BY = "ORDER_BY";
export const SEARCH_RECEPI = "SEARCH_RECEPI";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";

export function getRecipes(){
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/api/recipes");
        dispatch({ type: GET_RECIPES, payload: response.data});
    }
}
export function deleteRecipes(){
    return { type: DELETE_RECIPES, payload: []};
}
export function deleteRecipeDetail() {
  return { type: DELETE_RECIPE_DETAIL, payload: {} };
}
export function getDiets() {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/api/types`);
    dispatch({ type: GET_DIETS, payload: response.data });
  };
}
export function filterBy(filter, type) {
    console.log(filter,type, "actions");

  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/api/filter?${filter}=${type}`
    );
    dispatch({ type: FILTER_BY, payload: response.data });
  };
}

export function orderBy(action) {
  return { type: ORDER_BY, payload: action };
}

export function searchRecepi(recepi) {
  console.log(recepi, 'Actions Recepi');
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/api/recipes?name=${recepi}`
    );
    dispatch({ type: SEARCH_RECEPI, payload: response.data });
  };
}
export function getRecipeByID(id) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/api/recipes/${id}`
    );
    dispatch({ type: GET_RECIPE_BY_ID, payload: response.data });
  };
}