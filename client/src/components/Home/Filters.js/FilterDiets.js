import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getDiets } from '../../../actions'
import { DropdownMenu2 } from "../../UI/DropdownMenu/DropdownMenu2";

export const FilterDiets = () => {
    const {diets} = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
      if (diets.length <= 0) dispatch(getDiets(history));
    }, [dispatch, history, diets]);
    return (
      <>
        <DropdownMenu2
          filterItems={diets}
          filterType="diets"
          filterName="Filter By Diet"
          color="#FE633A"
        />
      </>
    );
}
