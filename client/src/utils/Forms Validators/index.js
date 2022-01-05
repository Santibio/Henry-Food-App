export function basicInfoValidator({
  name,
  summary,
  score,
  healthScore,
  image,
}) {
  let errors = {};
  if (!name) {
    errors.name = "name is required";
  } else if (!/^[a-z ,.'-]+$/i.test(name)) {
    errors.name = "name is invalid";
  }
  if (!summary || summary.trim().length <= 0) {
    errors.summary = "summary is required";
  }
  if (score) {
    if (score < 0 || score > 100) {
      errors.score = "score is invalid, it must be between 0 and 100";
    }
  }
  if (healthScore) {
    if (healthScore < 0 || healthScore > 100) {
      errors.healthScore =
        "health Score is invalid, it must be between 0 and 100";
    }
  }
  if (image) {
    if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(image)) {
      errors.image = "image invalid";
    }
  }

  return errors;
}

export function errorValidator(error) {
  return Object.keys(error).length > 0 ? true : false;
}
export function dietsValidator(diets) {
  return diets.length.length <= 0 ? false : true;
}
