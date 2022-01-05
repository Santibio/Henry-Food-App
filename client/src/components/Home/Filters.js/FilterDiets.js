import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiets } from '../../../actions'
import { DropdownMenu } from '../../UI/DropdownMenu/DropdownMenu'

export const FilterDiets = () => {
    const {diets} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getDiets())
    }, [dispatch])
    return (
      <>
        <DropdownMenu
          filterItems={diets}
          filterType="diets"
          filterName="Filter By Diet"
          color="#FE633A"
        />
      </>
    );
}
