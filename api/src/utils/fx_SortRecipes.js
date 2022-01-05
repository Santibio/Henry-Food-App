const sortRecipes = (recipes) => {
  return recipes.length > 0
    ? recipes.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
    : [{ msg: "No recipes found" }];
};

module.exports = {
  sortRecipes,
};
