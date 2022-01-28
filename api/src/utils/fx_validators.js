const queryValidator = (name) => {
  if (typeof name === "string" && name.trim().length >= 1) return true;
  return false;
};

function formValidator(types) {
  const {
    name,
    summary,
    image,
    score,
    healthScore,
    diets,
    steps,
    readyInMinutes,
  } = types;
  
  let errors = {};

  /* Validate name */
  if (!name) errors.name = "name is required";
  else if (!/^[a-z ,.'-]+$/i.test(name)) errors.name = "name is invalid";
  /* Validate summary */
  if (!summary) errors.summary = "summary is required";
  else if (typeof summary !== "string")
    errors.summary = "summary needs to be a string";
  else if (summary.trim().length <= 0) errors.summary = "summary is required";

  /* Validate score */
  if (score) {
    if (typeof score !== "number") errors.score = "score needs to be a number";
    if (score < 0 || score > 100)
      errors.score = "score is invalid, it must be a number between 0 and 100";
  }

  /* Validate healthScore */
  if (healthScore) {
    if (typeof healthScore !== "number")
      errors.healthScore = "healthScore to be a number";
    if (healthScore < 0 || healthScore > 100)
      errors.healthScore =
        "health Score is invalid, it must be between 0 and 100";
  }

  /* Validate readyInMinutes */
  if (readyInMinutes) {
    if (typeof readyInMinutes !== "number")
      errors.readyInMinutes = "Ready In Minutes needs to be a number";
    if (readyInMinutes <= 0 || readyInMinutes > 525600)
      errors.readyInMinutes =
        "Ready In Minutes is invalid, it must be between 0 and 525600";
  }

  /* Validate image */
  if (image) {
    if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(image))
      errors.image = "image is invalid";
  }

  /* Validate diets */
  if (!Array.isArray(diets)) {
    errors.diets = "diets are invalid";
  }

  if (steps) {
    if (!Array.isArray(steps)) errors.steps = "steps are invalid";
  }

  return errors;
}

module.exports = {
  formValidator,
  queryValidator,
};
