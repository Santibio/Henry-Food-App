import React, { memo, useEffect, useState } from "react";
import style from "./AddRecipe.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDiets } from "../../../actions";
import { BasicInfo } from "./BasicInfo/BasicInfo";
import Diets from "./Diets/Diets";
import Steps2 from "./Steps/Steps2";
import axios from "axios";
import {
  basicInfoValidator,
  errorValidator,
} from "../../../utils/Forms Validators";

export const AddRecipe = memo(() => {
  const [dietsForm, setDietsForm] = useState([]);
  const [errors, setErrors] = useState({ errors: "" });
  const [inputForm, setInputForm] = useState({
    fase: 1,
    name: "",
    summary: "",
    score: 0,
    healthScore: 0,
    image: "",
    steps: [],
    readyInMinutes: 0,
  });
  const { fase } = inputForm;

  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

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

 const stepsHandler = (step) => {
    setInputForm((prev) => ({
      ...prev,
      steps: [...prev.steps, { number: prev.steps.length + 1, step:step }],
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
      .then((r) => {
        if (r.data.status) {
          console.log(r.data.status);
          alert(r.data.msg);
          history.push("/home");
        } else {
          console.log(r.data.status);
          alert(r.data.msg);
          setInputForm({
            ...inputForm,
            fase: 1,
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  console.log(inputForm);

  return (
    <div className={style.innerFormContainer}>
      <div className={style.tittleContainer}>
        <h1>Add your recipe</h1>
      </div>
      <form onSubmit={submitHandler}>
        {fase === 1 && (
          <BasicInfo
            handlerChange={handlerChange}
            values={inputForm}
            errors={errors}
          />
        )}
        {fase === 2 && <Diets dietsHandler={dietsHandler} />}
        {/*  {fase === 3 && <Steps stepsHandler={stepsHandler}/>} */}
        {fase === 3 && (
          <Steps2
            handlerChange={handlerChange}
            values={inputForm}
            stepsHandler={stepsHandler}
          />
        )}
      </form>
      <div className={style.buttonContainer}>
        {fase > 1 && <button onClick={prevFase}>Prev</button>}
        {fase < 3 && <button onClick={nextFase}>Next</button>}
        {fase === 3 && (
          <button type="submit" onClick={submitHandler}>
            Confirm
          </button>
        )}
      </div>
    </div>
  );
});
