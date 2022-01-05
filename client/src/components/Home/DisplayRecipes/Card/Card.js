import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card2 = ({ id, name, img, diets }) => {
  return (
    <figure key={id}>
      {img && <img src={img} alt="" />}
      <figcaption>
        <h3>{name}</h3>
        <p>
          {diets?.map((g) => (
            <span key={g}>{g} </span>
          ))}
        </p>
        <Link
          to={`/home/recipe/${id}`}
          className={style.Link}
          style={{ color: "black" }}
        >
          <button>More Info</button>
        </Link>
      </figcaption>
    </figure>
  );
};

export default Card2;
