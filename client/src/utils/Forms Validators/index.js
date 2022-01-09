export function basicInfoValidator({
  name,
  summary,
  score,
  healthScore,
  image,
  readyInMinutes,
}) {
  let errors = {};
  if (!name) {
    errors.name = "Name is required";
  } else if (!/^[a-z ,.'-]+$/i.test(name)) {
    errors.name = "Name is invalid";
  }
  if (!summary || summary.trim().length <= 0) {
    errors.summary = "Summary is required";
  }
  if (score) {
    if (numberValidator(score)) {
      errors.score = "Score needs to be a number";
    }
    if (score < 0 || score > 100) {
      errors.score = "Score is invalid, it must be a number between 0 and 100";
    }
  }
  if (healthScore) {
    if (numberValidator(healthScore)) {
      errors.healthScore = "Health Score needs to be a number";
    }
    if (healthScore < 0 || healthScore > 100) {
      errors.healthScore =
      "Health Score is invalid, it must be between 0 and 100";
    }
  }
  if (readyInMinutes) {
    if (numberValidator(readyInMinutes)) {
      errors.readyInMinutes = "Ready In Minutes needs to be a number";
    }
    if (readyInMinutes <= 0) {
      errors.readyInMinutes =
      "Ready In Minutes is invalid, it must be greater than 0";
    }
  }
  if (image) {
    if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g.test(image)) {
      errors.image = "Image invalid";
    }
  }
  
  return errors;
}

function numberValidator(n){
  let aux = parseInt(n)

  return isNaN(aux + n);
}
numberValidator(3)
export function errorValidator(error) {
  return Object.keys(error).length > 0 ? true : false;
}
export function dietsValidator(diets) {
  return diets.length.length <= 0 ? false : true;
}

