const { Router } = require("express");
const router = Router();
const { Diet } = require("../db");
const { getAllDiets } = require("../utils/fx_Diets");

// Configuro rutas diet types
router.get("/types", async (req, res, next) => {
  try {
    const allDiets = await Diet.findAll();
    if (allDiets.length <= 0) {
      console.log("Types of diets  API");
      const DIETS =  await getAllDiets()
      DIETS.forEach((d) => {
        Diet.findOrCreate({
          where: { name: d },
        });
      });
      const allDietsNew = await Diet.findAll();
      res.status(200).json(allDietsNew.map((d) => d.name)); 
    } else {
      console.log('Types of diets DB')
      res.status(200).json(allDiets.map((d) => d.name));
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
