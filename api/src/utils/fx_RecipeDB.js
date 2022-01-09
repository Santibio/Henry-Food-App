const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");

const getAllRecipesDB = async () => {
  try {
    const allDBRecepies = await Recipe.findAll({
      include: [{ model: Diet }],
    });
    return mapper(allDBRecepies);
  } catch (error) {
    console.log(error);
  }
};
const getRecipesByNameDB = async (name) => {
  try {
    const recipesByNameDB = await Recipe.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [{ model: Diet }],
    });
    return mapper(recipesByNameDB);
  } catch (error) {
    console.log(error);
  }
};

const getRecipeByIdDB = (id) => {
  const recipeByIdDB = Recipe.findByPk(id, {
    include: [{ model: Diet }],
  }).then(
    ({
      id,
      name,
      summary,
      score,
      healthScore,
      image,
      readyInMinutes,
      diets,
      steps,
    }) => ({
      id,
      name,
      summary,
      score,
      healthScore,
      image,
      readyInMinutes,
      steps: steps.map((s) => s.step),
      diets: diets.map((d) => d.name),
      origin: "DB",
    })
  );

  return recipeByIdDB;
};

const mapper = (ArrayObj) => {
  return ArrayObj.map(
    ({
      id,
      name,
      summary,
      score,
      healthScore,
      image,
      diets,
      readyInMinutes,
    }) => ({
      id,
      name,
      summary,
      score,
      healthScore,
      image,
      readyInMinutes,
      diets: diets.map((d) => d.name),
    })
  );
};

module.exports = {
  getAllRecipesDB,
  getRecipesByNameDB,
  getRecipeByIdDB,
};
