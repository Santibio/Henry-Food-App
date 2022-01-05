const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const { getAllRecipesAPI } = require("../utils/fx_RecipeAPI");

// Configuro rutas
router.get("/types", async (req, res, next) => {
  try {
    let allRecipesApi = await getAllRecipesAPI();
    allRecipesApi = allRecipesApi.map((r) => r.diets).flat().concat("vegetarian");

    const DIETS = new Set(allRecipesApi);
    DIETS.forEach((d) => {
      Diet.findOrCreate({
        where: { name: d },
      });
    });
    const allDiets = await Diet.findAll();
    res.json(allDiets.map((d) => d.name));
   
  } catch (error) {
    next(error);
    console.log(error, "Erros at types of diets");
  }
});

module.exports = router;
