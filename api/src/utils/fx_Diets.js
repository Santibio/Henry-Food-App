const { getAllRecipesAPI } = require("./fx_RecipeAPI");

const getAllDiets = async()=>{
     let allRecipesApi = await getAllRecipesAPI();
     const DIETS = new Set(allRecipesApi.map((r) => r.diets)
       .flat()
       .concat("vegetarian"));
     return DIETS;
}
module.exports = {
  getAllDiets,
};