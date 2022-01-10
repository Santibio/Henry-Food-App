import React, { memo } from "react";
import { DropdownMenu } from "../../UI/DropdownMenu/DropdownMenu";
import { FilterDiets } from "./FilterDiets";

export const Filters = memo(() => {
  console.log('Filters')
  return (
    <>
      <FilterDiets />
      <DropdownMenu
        filterItems={["Asc", "Desc"]}
        filterType="order"
        filterName="Order By"
        color="#3654d1"
      />
    </>
  );
});
