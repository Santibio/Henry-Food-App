const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const getAllRecipesAPI = async () => {
  const allAPIRecepies = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${YOUR_API_KEY}&addRecipeInformation=true`
  );
  return mapper(allAPIRecepies.data.results);
};

const getRecipesByNameAPI = async (name) =>{
    const allAPIRecepies = await getAllRecipesAPI();
    return allAPIRecepies.filter((r) => r.name.toLowerCase().includes(name));
}

const getRecipeByIdAPI =  (id)=>{
  const recipeById =  axios
    .get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${YOUR_API_KEY}`
    )
    .then((recipe) => ({
      id: recipe.data.id,
      name: recipe.data.title,
      summary: recipe.data.summary,
      score: recipe.data.spoonacularScore,
      healthScore: recipe.data.healthScore,
      image: recipe.data.image,
      diets: recipe.data.diets,
    }));

    return recipeById;

}

const mapper = (ArrayObj) => {
  return ArrayObj.map(
    ({ id, title, summary, spoonacularScore, healthScore, diets, image }) => ({
      id,
      name: title,
      summary,
      score: spoonacularScore,
      healthScore,
      image,
      diets,
    })
  );
};
module.exports = {
  getAllRecipesAPI,
  getRecipesByNameAPI,
  getRecipeByIdAPI,
};
