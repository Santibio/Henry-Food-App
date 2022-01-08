const { getAllRecipesAPI } = require("./fx_RecipeAPI");

const getAllDiets = async()=>{
     let allRecipesApi = await getAllRecipesAPI();
     allRecipesApi = allRecipesApi
       .map((r) => r.diets)
       .flat()
       .concat("vegetarian");

     const DIETS = new Set(allRecipesApi);
     return DIETS;
}
module.exports = {
  getAllDiets,
};