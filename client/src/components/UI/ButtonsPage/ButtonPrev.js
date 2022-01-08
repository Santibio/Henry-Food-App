import styled from "styled-components";

const ButttonPrev = styled.button`
  background: var(--main-btn-color);
  color: #ffffff;
  cursor: pointer;
  font-size: 1.1em;
  padding: 0.5rem 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 2rem;
  min-width: 8%;
  position: relative;
  margin-top: 5px;

  &::after {
    content: "<";
    font-weight: 400;
    position: absolute;
    left: 10%;
    top: 23%;
    right: 75%;
    bottom: 0;
    opacity: 0;
  }

  &:hover {
    background: var(--second-btn-color);
    transition: all 0.5s;
    border-radius: 2rem;
    padding: 0.5rem 1.5rem 0.5rem 2.3rem;

    &::after {
      opacity: 1;
      transition: all 0.5s;
    }
  }
`;

export default ButttonPrev;
