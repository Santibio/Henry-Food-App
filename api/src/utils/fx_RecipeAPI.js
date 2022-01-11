const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const getAllRecipesAPI = async () => {
  try {
    const allAPIRecepies = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${YOUR_API_KEY}&addRecipeInformation=true`
    );
    return mapper(allAPIRecepies.data.results);
  } catch (error) {
    console.log(error)
  }
};

const getRecipesByNameAPI = async (name) => {

  try {
     const allAPIRecepies = await getAllRecipesAPI();
     return allAPIRecepies.filter((r) => r.name.toLowerCase().includes(name));
  } catch (error) {
    console.log(error);
  }
};

const getRecipeByIdAPI = (id) => {
  const recipeById = axios
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
      readyInMinutes: recipe.data.readyInMinutes,
      steps: recipe.data.analyzedInstructions[0]?.steps?.map((s) => s.step),
      origin: "API",
    })).catch(error=>{
      console.log(error)
    })

  return recipeById;
};

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
