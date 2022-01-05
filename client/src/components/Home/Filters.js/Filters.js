import React from 'react'
import style from './Filters.module.css'
import { DropdownMenu } from '../../UI/DropdownMenu/DropdownMenu'
import { FilterDiets } from './FilterDiets';


export const Filters = () => {
    return (
      <div className={style.filtersContainer}>
        <FilterDiets />
        <DropdownMenu
          filterItems={["API", "DB"]}
          filterType="From"
          filterName="Filter By From"
          color="#3654d1"
        />
        <DropdownMenu
          filterItems={["Asc", "Desc"]}
          filterType="order"
          filterName="Order By"
          color="#bdc7ed"
        />
      </div>
    );
}
