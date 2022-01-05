const queryValidator = (name) => {
  if (typeof name === "string" && name.trim().length >= 1) return true;
  return false;
};

const videogameNameValidator = (name) => {
  if (typeof name === "string" && name.trim().length >= 1) return true;
  return false;
};

function formValidator(types) {
  const { name, summary, image, score, healthScore, diets, steps } = types;
  let errors = {};
  if (!name) {
    errors.name = "name is required";
  } else if (!/^[a-z ,.'-]+$/i.test(name)) {
    errors.name = "name is invalid";
  }
  if (!summary || summary.trim().length <= 0) {
    errors.summary = "summary is required";
  }
  if (score < 0 || score > 100) {
    errors.score = "score is invalid, it must be between 0 and 100";
  }
  if (healthScore < 0 || healthScore > 100) {
    errors.healthScore =
      "health ccore is invalid, it must be between 0 and 100";
  }
  if (image) {
    if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(image)) {
      errors.image = "image is invalid";
    }
  }
  if (!Array.isArray(diets) ) {
    errors.diets = "diets are invalid";
  }
  if(steps){
    if (!Array.isArray(steps) ) {
      errors.steps = "steps are invalid";
    }
  }

  return errors;
}

module.exports = {
  formValidator,
  queryValidator,
};
