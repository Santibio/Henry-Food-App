import React from "react";
import { useSelector } from "react-redux";


const ImageRecipe = () => {
  const { recipeDetail } = useSelector((state) => state);
  const { image, name } = recipeDetail;
  return (
    <div>
      <img src={image} alt=""  />
      <figcaption>{name}</figcaption>
    </div>
  );
};

export default ImageRecipe;
