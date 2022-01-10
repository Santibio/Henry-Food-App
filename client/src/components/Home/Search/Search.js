import React, { memo, useState } from "react";
import style from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { Link, useHistory } from "react-router-dom";

export const Search = memo(() => {
  console.log('Search')
  const [inputSearch, setInputSearch] = useState("");
  const history = useHistory();
  const searchHandler = (e) => {
    if (e.key === "Enter" || e.target.value === undefined) {
      if (inputSearch.trim().length > 0) {
        setInputSearch("");
        return history.push(`/home/search/${inputSearch}`);
      } else alert("You need to enter a value");
    }
  };
  const inputSearchHandler = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <>
      <div className={style.searchBar}>
        <FaSearch
          color="#121418"
          width="auto"
          className={style.searchIcon}
          onClick={searchHandler}
          value="searchIcon"
        />
        <input
          type="text"
          placeholder="Search By Name"
          onKeyDown={searchHandler}
          onChange={inputSearchHandler}
        />
      </div>
      <div className={style.addRecipeContainer}>
        <Link to="/addRecipe" className={style.Link}>
          <GrAdd fontSize="1.4rem" />
        </Link>
      </div>
    </>
  );
});
