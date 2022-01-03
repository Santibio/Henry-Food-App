const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");

const getAllRecipiesDB = async () => {
  const allDBRecepies = await Recipe.findAll({
    include: [{ model: Diet }],
  });
  return mapper(allDBRecepies);

};
const getRecipiesByNameDB = async (name) => {
  const recipiesByNameDB = await Recipe.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: [{ model: Diet }],
  });
  return mapper(recipiesByNameDB);
};

const getRecipieByIdDB =  (id) =>{
    const recipieByIdDB = Recipe.findByPk(id, {
      include: [{ model: Diet }],
    }).then(({ id, name, summary, score, healthScore, image, diets }) => ({
      id,
      name,
      summary,
      score,
      healthScore,
      image,
      diets: diets.map((d) => d.name),
    }));
   return recipieByIdDB;
}

const mapper = (ArrayObj) => {
  return ArrayObj.map(
    ({ id, name, summary, score, healthScore, image, diets }) => ({
      id,
      name,
      summary,
      score,
      healthScore,
      image,
      diets: diets.map((d) => d.name),
    })
  );
};

module.exports = {
  getAllRecipiesDB,
  getRecipiesByNameDB,
  getRecipieByIdDB,
};
