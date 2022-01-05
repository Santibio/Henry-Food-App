import React from 'react'
import style from './Search.module.css'
import { FaSearch } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import {Link} from "react-router-dom"


export const Search = () => {
  
    return (
      <div className={style.searchContainer}>
        <div className={style.searchBar}>
          <FaSearch color="#121418" width="auto" />
          <input type="text" placeholder="Search By Name" />
        </div>
        <div className={style.addRecipeContainer}>
          <Link to="/addRecipe" style={{padding: 0, textDecoration: 'none', margin:0}}>
            <GrAdd fontSize="1.4rem" />
          </Link>
        </div>
      </div>
    );
}
