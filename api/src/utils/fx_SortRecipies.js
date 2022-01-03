const sortRecipies = (recipies) => {
  return recipies.length > 0
    ? recipies.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
      })
    : [{ msg: "No recipies found" }];
};

module.exports = {
  sortRecipies,
};
