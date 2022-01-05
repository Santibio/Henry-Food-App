
import { useSelector } from "react-redux";
import style from "./Diets.module.css";

const Diets = ({ dietsHandler }) => {
  const addDiets = (e) => {
    dietsHandler(e);
  };
  /* const { diets } = useSelector((state) => state); */
 const { dietsSinBack } = useSelector((state) => state); 
  return (
    <div>
      <label>Diets</label>
      <div className={style.dietsContainter}>
        {dietsSinBack.map((diet) => (
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
