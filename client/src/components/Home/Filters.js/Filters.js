import React, { memo } from 'react'
import { DropdownMenu } from '../../UI/DropdownMenu/DropdownMenu'
import { FilterDiets } from './FilterDiets';


export const Filters = memo(() => {
  console.log("filters")
    return (
      <>
        <FilterDiets />
        <DropdownMenu
          filterItems={["API", "DB"]}
          filterType="from"
          filterName="Filter By From"
          color="#3654d1"
        />
        <DropdownMenu
          filterItems={["Asc", "Desc"]}
          filterType="order"
          filterName="Order By"
          color="#bdc7ed"
        />
      </>
    );
})
