import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecipeDetail,
  getRecipeByID,

} from "../../../actions";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import Presentation from "./Presentation/Presentation";
import ImageRecipe from "./ImageRecipe/ImageRecipe";
import Summary from "./Summary/Summary";
import Steps from "./Steps/Steps";
import portada from "../../../img/portada.jpg";
import Loading from "../../UI/Loading/Loading";

import { DeleteRecipe } from "./DeleteRecipe/DeleteRecipe";

export const Detail = memo(() => {
  const { id } = useParams();

  const { recipeDetail } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipeByID(id));
    return function cleanup(){
      dispatch(deleteRecipeDetail())
    }
  }, [dispatch, id]);

  if (Object.keys(recipeDetail).length === 0) return <Loading />;

  return (
    <div className={style.detailContainer}>
      {recipeDetail.msg ? (
        <div className={style.noFound_container}>
          <p>{recipeDetail.msg}</p>
        </div>
      ) : (
        <div>
          <div className={style.portadaContainer}>
            <img src={portada} alt="" />
          </div>
          <div className={style.presentationContainer}>
            <Presentation />
          </div>
          <div className={style.summaryContainer}>
            <Summary />
          </div>
          <div className={style.imageRecipeContainer}>
            <ImageRecipe />
          </div>
          <div className={style.stepsContainer}>
            <Steps />
          </div>
          {recipeDetail.origin === "DB" && <DeleteRecipe id={id} />}
        </div>
      )}
    </div>
  );
});
