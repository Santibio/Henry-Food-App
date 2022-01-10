import style from "./BasicInfo.module.css";

export const BasicInfo = ({ handlerChange, values, errors }) => {
  return (
    <div className={style.inputFormContainer}>
      <div>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handlerChange}
          placeholder="Name (*)"
          required
          />
        <div className={style.danger}>
          {errors.name && <p>{errors.name}</p>}
        </div>
      </div>
      <div>
        <input
          className={style.summary}
          type="text"
          name="summary"
          value={values?.summary}
          onChange={handlerChange}
          placeholder="Summary (*)"
          required
        />
        <div className={style.danger}>
          {errors.summary && <p>{errors.summary}</p>}
        </div>
      </div>
      <div>
        <input
          type="text"
          name="image"
          value={values?.image}
          onChange={handlerChange}
          placeholder="Image URL"
        />
        <div className={style.danger}>
          {errors.image && <p>{errors.image}</p>}
        </div>
      </div>
      <div>
        <input
          type="number"
          name="score"
          value={values?.score ? values.score : ""}
          onChange={handlerChange}
          placeholder="Score (0 to 100)"
          min="0"
          max="100"
        />
        <div className={style.danger}>
          {errors?.score && <p>{errors.score}</p>}
        </div>
      </div>
      <div>
        <input
          type="number"
          name="healthScore"
          value={values.healthScore ? values.healthScore : ""}
          onChange={handlerChange}
          placeholder="Health Score (0 to 100)"
          min="0"
          max="100"
        />
        <div className={style.danger}>
          {errors.healthScore && <p>{errors.healthScore}</p>}
        </div>
      </div>
      <div>
        <input
          type="number"
          name="readyInMinutes"
          value={values?.readyInMinutes ? values.readyInMinutes : ""}
          onChange={handlerChange}
          placeholder="Ready In Minutes"
          min="0"
        />
        <div className={style.danger}>
          {errors.readyInMinutes && <p>{errors.readyInMinutes}</p>}
        </div>
      </div>
    </div>
  );
};
