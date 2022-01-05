import React, { memo, useEffect, useState } from "react";
import style from "./AddRecipe.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getDiets } from "../../../actions";
import { BasicInfo } from "./BasicInfo/BasicInfo";
import Diets from "./Diets/Diets";
import Steps from "./Steps/Steps";
import axios from "axios";
import {
  basicInfoValidator,
  errorValidator,
} from "../../../utils/Forms Validators";

export const AddRecipe = memo(() => {
  const [dietsForm, setDietsForm] = useState([]);
  const [errors, setErrors] = useState({ invalid: "on" });
  const [inputForm, setInputForm] = useState({
    fase: 1,
    name: "",
    summary: "",
    score: 0,
    healthScore: 0,
    image: "",
    steps: [],
  });
  const { fase, name, summary, score, healthScore, image, steps, diets } =
    inputForm;
  const values = {
    name,
    summary,
    score,
    healthScore,
    image,
    steps,
  };

  /*  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]); */

  const nextFase = (e) => {
    e.preventDefault();
    if (!errorValidator(errors)) {
      const { fase } = inputForm;
      setInputForm({
        ...inputForm,
        fase: fase + 1,
      });
    } else {
      alert("One or more fields are incorrect");
    }
  };
  const prevFase = (e) => {
    e.preventDefault();
    const { fase } = inputForm;
    setInputForm({
      ...inputForm,
      fase: fase - 1,
    });
  };
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors(
      basicInfoValidator({
        ...inputForm,
        [name]: value,
      })
    );
  };
  const addStepsToValues = (steps) => {
    setInputForm((prev) => ({
      ...prev,
      steps: steps,
    }));
  };

  const dietsHandler = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      setDietsForm([...dietsForm, value]);
    } else {
      const selectedAcc = dietsForm.filter((a) => {
        if (a === value) return false;
        return true;
      });
      setDietsForm([...selectedAcc]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const RECIPE = { ...inputForm, diets: [...new Set(dietsForm)] };
    axios
      .post("http://localhost:3001/api/recipe", RECIPE, {
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => console.log(r.data));
  };

  return (
    <div className={style.innerFormContainer}>
      <div className={style.tittleContainer}>
        <h2>Add your recipe</h2>
      </div>
      <form onSubmit={submitHandler}>
        {fase === 1 && (
          <BasicInfo
            handlerChange={handlerChange}
            values={values}
            errors={errors}
          />
        )}
        {fase === 2 && <Diets dietsHandler={dietsHandler} />}
        {fase === 3 && <Steps addStepsToValues={addStepsToValues} />}
      </form>
      <div className={style.buttonContainer}>
        {fase > 1 && <button onClick={prevFase}>Prev</button>}
        {fase < 3 && <button onClick={nextFase}>Next</button>}
      </div>
    </div>
  );
});
