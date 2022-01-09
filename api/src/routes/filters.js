/* const { Videogame, diet } = require("../db"); */
const { Router } = require("express");
const { getAllRecipesAPI } = require("../utils/fx_RecipeAPI");
const { getAllRecipesDB } = require("../utils/fx_RecipeDB");
const { sortRecipes } = require("../utils/fx_SortRecipes");
const router = Router();


// Configuro rutas filtrado
router.get("/filter", async (req, res, next) => {
  try {
    console.log(req.query);
    const { diets, origin } = req.query;
  
    if (diets) {
      let recipesAPI = await getAllRecipesAPI();
      let recipesDB = await getAllRecipesDB();
      let allRecipes = [...recipesDB, ...recipesAPI].filter((g) =>
        g.diets.includes(diets)
      );
      return res.json(sortRecipes(allRecipes));
    }
    if (origin) {
      if (origin === "API") {
        let recipesAPI = await getAllRecipesAPI();
        return res.json(sortRecipes(recipesAPI));
      }
      if (origin === "DB") {
        let recipesDB = await getAllRecipesDB();
        return res.json(sortRecipes(recipesDB));
      }
    }
    return res.status(404).json({ msg: "Error in querys" });
  } catch (error) {
    next(error);

    res.status(404).json({msg:'Error in querys'});
  }
});


module.exports = router;
