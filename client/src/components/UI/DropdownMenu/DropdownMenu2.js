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
  width: 13rem;
  height: 2.5em;
  padding: 0 4em 0 0.8em;
  background: url("https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg")
    no-repeat right 1.5em center / 1em;
  color: #fff;
  background-color: ${(props) => (props.color ? props.color : "")};
  border-radius: 2em;
  box-shadow: 0 0.2rem 0.2em 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.2s ease, padding 0.3s ease;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    padding: 0 4em 0 1em;
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

export const DropdownMenu2 = ({
  filterItems,
  color,
}) => {
  const history = useHistory();
  const optionHandler = (e) => {
   
    if (e.target.value === "0") return history.push(`/home/`);
    if (e.target.value === "DB" || e.target.value === "API")
      return history.push(`/home/origin/${e.target.value}`);
    else return  history.push(`/home/diets/${e.target.value}`);
  };
  return (
    <div>
      <Select
        placeholder="Filter"
        arrow={arrow}
        arrowu={arrowu}
        defaultValue="0"
        color={color}
        onChange={optionHandler}
      >
        
        <Option value="0">Filter by</Option>
        <optgroup label="Diets">
          {filterItems?.map((e) => (
            <Option value={e} key={e} name="diet">
              {e}
            </Option>
          ))}
        </optgroup>
        <optgroup label="Origin">
          <Option value="API" key="API" filterType="origin">
            API
          </Option>
          <Option value="DB" key="DB" filterType="origin">
            DB
          </Option>
        </optgroup>
      </Select>
    </div>
  );
};
