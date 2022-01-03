/* const { Videogame, diet } = require("../db"); */
const { Router } = require("express");
const { getAllRecipiesAPI } = require("../utils/fx_RecipeAPI");
const { getAllRecipiesDB } = require("../utils/fx_RecipeDB");
const { sortRecipies } = require("../utils/fx_SortRecipies");
const router = Router();


// Configuro rutas filtrado
router.get("/filter", async (req, res, next) => {
  try {
    const { diet, from } = req.query;
    if (diet) {
      let recipiesAPI = await getAllRecipiesAPI();
      let recipiesDB = await getAllRecipiesDB();
      let allRecipies = [...recipiesDB, ...recipiesAPI].filter((g) =>
        g.diets.includes(diet)
      );
      return res.json(sortRecipies(allRecipies));
    }
    if (from) {
      if (from === "API") {
          
        let recipiesAPI = await getAllRecipiesAPI();
        return res.json(sortRecipies(recipiesAPI));
      }
      if (from === "DB") {
        let recipiesDB = await getAllRecipiesDB();
        return res.json(sortRecipies(recipiesDB));
      }
    }
    return res.status(404).json({ msg: "Error in querys" });
  } catch (error) {
    next(error);
    console.log(error)
    res.status(404).json({msg:'Error in querys'});
  }
});


module.exports = router;
