const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const router = Router();
const {
  getAllRecipesAPI,
  getRecipesByNameAPI,
  getRecipeByIdAPI,
} = require("../utils/fx_RecipeAPI");
const {
  getAllRecipesDB,
  getRecipesByNameDB,
  getRecipeByIdDB,
} = require("../utils/fx_RecipeDB");
const { sortRecipes } = require("../utils/fx_SortRecipes");
const { queryValidator, formValidator } = require("../utils/fx_validators");

// Configuro rutas
router.get("/recipes", async (req, res, next) => {
  try {
    const { name } = req.query;
    let AllRecipesAPI;
    let AllRecipesDB;
    if (name) {
        if(!queryValidator(name)) return res.status(404).json({ msg: "Query invalido" });
      AllRecipesAPI = await getRecipesByNameAPI(name.toLowerCase());
      AllRecipesDB = await getRecipesByNameDB(name.toLowerCase());
    } else {
      AllRecipesAPI = await getAllRecipesAPI();
      AllRecipesDB = await getAllRecipesDB();
    }
    return res.json(sortRecipes([...AllRecipesAPI, ...AllRecipesDB]));
  } catch (error) {
    /* next(error); */
    return res.status(404).json({ msg: "Recipe not found" });
  }
});

router.get("/recipes/:idRecipe", async (req, res, next) => {
  try {
    const { idRecipe } = req.params;

    if (idRecipe.includes("-")) {
      let recipeDB = await getRecipeByIdDB(idRecipe);
      return res.json(recipeDB);
    } else {
      let recipeAPI = await getRecipeByIdAPI(idRecipe);
      return res.json(recipeAPI);
    }
  } catch (error) {
   /*  next(error); */
    return res.status(404).json({ msg: "Recipe not found" });
  }
});

router.post("/recipe", async (req, res, next) => {
  try {
    const { name, summary, score, healthScore, image, diets,steps } = req.body;
     if (Object.keys(formValidator(req.body)).length <= 0 ? false : true) {
       return res.json(formValidator(req.body));
     }
    const [recipe, status] = await Recipe.findOrCreate({
      where: {
        name: name.toLowerCase(),
      },
      defaults: {
        summary,
        score,
        healthScore,
        image,
        steps,
      },
    });

    let dietsDb = await Diet.findAll({
      where: { name: diets },
    });

     await recipe.addDiet(dietsDb);
console.log(status)
    return res.json(
      status
        ? { msg: "correctly created recipe", recipe }
        : { msg: "there is already a recipe with that name", status }
    );
  } catch (error) {
   next(error);
   return res.status(404).json({
     msg: "Error",
   });
  }
});

module.exports = router;
