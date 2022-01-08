
import { useSelector } from "react-redux";
import style from "./Diets.module.css";

const Diets = ({ dietsHandler }) => {
  const addDiets = (e) => {
    dietsHandler(e);
  };
  const { diets } = useSelector((state) => state);
/*  const { dietsSinBack } = useSelector((state) => state);  */
  return (
    <div className={style.inputFormContainer}>
      <label>Choose between different types of diets</label>
      <div className={style.dietsContainter}>
        {diets.map((diet) => (
          <span key={diet}>
            <input
              type="checkbox"
              name={diet}
              value={diet}
              onChange={addDiets}
            />{" "}
            {diet}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Diets;
