const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const router = Router();
const {
  getAllRecipiesAPI,
  getRecipiesByNameAPI,
  getRecipieByIdAPI,
} = require("../utils/fx_RecipeAPI");
const {
  getAllRecipiesDB,
  getRecipiesByNameDB,
  getRecipieByIdDB,
} = require("../utils/fx_RecipeDB");
const { sortRecipies } = require("../utils/fx_SortRecipies");
const { queryValidator, formValidator } = require("../utils/fx_validators");

// Configuro rutas
router.get("/recipies", async (req, res, next) => {
  try {
    const { name } = req.query;
    let AllRecipiesAPI;
    let AllRecipiesDB;
    if (name) {
        if(!queryValidator(name)) return res.status(404).json({ msg: "Query invalido" });
      AllRecipiesAPI = await getRecipiesByNameAPI(name.toLowerCase());
      AllRecipiesDB = await getRecipiesByNameDB(name.toLowerCase());
    } else {
      AllRecipiesAPI = await getAllRecipiesAPI();
      AllRecipiesDB = await getAllRecipiesDB();
    }
    return res.json(sortRecipies([...AllRecipiesAPI, ...AllRecipiesDB]));
  } catch (error) {
    /* next(error); */
    return res.status(404).json({ msg: "Recipe not found" });
  }
});

router.get("/recipies/:idRecipe", async (req, res, next) => {
  try {
    const { idRecipe } = req.params;

    if (idRecipe.includes("-")) {
      let recipeDB = await getRecipieByIdDB(idRecipe);
      return res.json(recipeDB);
    } else {
      let recipeAPI = await getRecipieByIdAPI(idRecipe);
      return res.json(recipeAPI);
    }
  } catch (error) {
   /*  next(error); */
    return res.status(404).json({ msg: "Recipe not found" });
  }
});

router.post("/recipe", async (req, res, next) => {
  try {
    const { name, summary, score, healthScore, image, diets } = req.body;
     if (Object.keys(formValidator(req.body)).length <= 0 ? false : true) {
       return res.json(formValidator(req.body));
     }
    const [recipie, status] = await Recipe.findOrCreate({
      where: {
        name: name.toLowerCase(),
      },
      defaults: {
        summary,
        score,
        healthScore,
        image,
      },
    });

    let dietsDb = await Diet.findAll({
      where: { name: diets },
    });

     await recipie.addDiet(dietsDb);

    return res.json(
      status
        ? { msg: "correctly created recipe", status }
        : { msg: "there is already a recipe with that name", status }
    );
  } catch (error) {
 /*   next(error); */
   return res.status(404).json({
     msg: "Error",
   });
  }
});

module.exports = router;
