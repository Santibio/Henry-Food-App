const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const { getAllRecipiesAPI } = require("../utils/fx_RecipeAPI");

// Configuro rutas
router.get("/types", async (req, res, next) => {
  try {
    const DIETS = [
      "gluten Free",
      "dairy free",
      "lacto ovo vegetarian",
      "vegan",
      "paleolithic",
      "primal",
      "pescatarian",
      "fodmap friendly" ,
      "whole 30",
    ]; 
   
    DIETS.forEach((d) => {
      Diet.findOrCreate({
        where: { name: d },
      });
    });
    const allDiets = await Diet.findAll();
    res.json(allDiets);

  } catch (error) {
    next(error);
    console.log(error, "types");
  }
  /*  try {
    const allAPIRecepies = await axios.get(
      `https://api.spoonacular.com/recipes/716429/information?apiKey=${YOUR_API_KEY}&includeNutrition=true.`
    );
    return res.json(allAPIRecepies.data.results);
  } catch (error) {
      next(error)
    console.log(error, "types");
  } */
});

module.exports = router;
