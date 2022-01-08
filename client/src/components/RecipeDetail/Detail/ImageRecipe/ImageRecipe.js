import React from "react";
import { useSelector } from "react-redux";
import style from "./ImageRecipe.module.css";

const ImageRecipe = () => {
  const { recipeDetail } = useSelector((state) => state);
  const { image, name } = recipeDetail;
  return (
    <div>
      <img src={image} alt="" className={style.imageRecipe} />
      <figcaption>{name}</figcaption>
    </div>
  );
};

export default ImageRecipe;
