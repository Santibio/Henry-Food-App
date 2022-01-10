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

// Configuro rutas recipes

// Trae todos las recetas o las recetas que tienen ese nombre si se espefica por query
router.get("/recipes", async (req, res, next) => {
  try {
    const { name } = req.query;
    let AllRecipesAPI;
    let AllRecipesDB;
    if (name) {
      AllRecipesAPI = await getRecipesByNameAPI(name.toLowerCase());
      AllRecipesDB = await getRecipesByNameDB(name.toLowerCase());
    } else {
        AllRecipesAPI = await getAllRecipesAPI();
        AllRecipesDB = await getAllRecipesDB();
    }
    return res
      .status(200)
      .json(sortRecipes([...AllRecipesAPI, ...AllRecipesDB]));
  } catch (error) {
    next(error)
  }
});

// Trae receta por id
router.get("/recipes/:idRecipe", async (req, res, next) => {
  try {
    const { idRecipe } = req.params;

    if (idRecipe.includes("-")) {
      let recipeDB = await getRecipeByIdDB(idRecipe);
      console.log("Search at DB");
      return res.json(recipeDB);
    } else {
      let recipeAPI = await getRecipeByIdAPI(idRecipe);
      console.log("Search at API");
      return res.json(recipeAPI);
    }
  } catch (error) {
     next(error);
    return res.json({ msg: "Recipe not found" });
  }
});

// Crea una receta
router.post("/recipe", async (req, res, next) => {
  try {
    const {
      name,
      summary,
      score,
      healthScore,
      image,
      diets,
      steps,
      readyInMinutes,
    } = req.body;

    // Valida que lo que llegue sea correcto
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
        readyInMinutes
      },
    });

    let dietsDb = await Diet.findAll({
      where: { name: diets },
    });

    await recipe.addDiet(dietsDb);

    return res.json(
      status
        ? { msg: "Correctly created recipe", status, recipe }
        : { msg: "There is already a recipe with that name", status }
    );
  } catch (error) {
    next(error);
    return res.status(404).json({
      msg: "Error when creating a recipe",
    });
  }
});

router.delete("/recipe/:idRecipe", (req, res, next) => {
  const { idRecipe } = req.params;
  Recipe.destroy({
    where: {
      id: idRecipe,
    },
  })
    .then(() => res.json({ msg: "Successfully deleted" }))
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
