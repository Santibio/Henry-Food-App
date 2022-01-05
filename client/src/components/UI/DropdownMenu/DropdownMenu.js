import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../../img/caret-down-solid.svg";
import arrowu from "../../../img/caret-up-solid.svg";

const Select = styled.select`
  appearance: none;
  border: 0;
  outline: 0;
  font: inherit;
  /* Personalize */
  max-width: 13rem;
  height: 3em;
  padding: 0 4em 0 1em;
  background: url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg")
    no-repeat right 1.5em center / 1em;
  color: #fff;
  background-color: ${(props) => (props.color ? props.color : "")};
  border-radius: 2em;
  box-shadow: 0 0.2rem 0.2em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.2s ease, padding 0.3s ease;

  &:focus {
    outline: none;
    padding: 0 4.2em 0 1.3em;
  }
  &::-ms-expand {
    display: none;
  }
`;

const Option = styled.option`
  text-transform: capitalize;
  color: #000;
  background-color: #fff;
  transition: all 2s ease;
`;

export const DropdownMenu = ({
  filterName,
  filterItems,
  color,
  filterType,
}) => {
  const history = useHistory();
  const optionHandler = (e) => {
    if (e.target.value === "0") return;
    history.push(`/home/${filterType}/${e.target.value}`);
  };
  return (
    <div>
      <Select
        placeholder="Filter"
        arrow={arrow}
        arrowu={arrowu}
        defaultValue="0"
        color={color}
        onClick={optionHandler}
      >
        <Option value="0">{filterName}</Option>
        {filterItems?.map((e, i) => (
          <Option value={e} key={e}>
            {e}
          </Option>
        ))}
      </Select>
    </div>
  );
};
