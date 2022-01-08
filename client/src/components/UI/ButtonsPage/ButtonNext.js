import styled from "styled-components";

const ButtonNext = styled.button`
  background: var(--main-btn-color);
  color: #ffffff;
  cursor: pointer;
  font-size: 1.2em;
  padding: 0.5rem 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 2rem;
  min-width: 8%;
  position: relative;
  margin-top: 5px;

  &::after {
    content: ">";
    font-weight: 400;
    position: absolute;
    left: 75%;
    top: 20%;
    right: 10%;
    bottom: 0;
    opacity: 0;
  }

  &:hover {
    cursor: pointer;
    background: var(--second-btn-color);
    transition: all 0.5s;
    border-radius: 2rem;
    padding: 0.5rem 2.3rem 0.5rem 1.5rem;

    &::after {
      opacity: 1;
      transition: all 0.5s;
    }
  }
`;

export default ButtonNext;
