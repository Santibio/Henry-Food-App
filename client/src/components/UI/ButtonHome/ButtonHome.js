import styled from "styled-components";

const ButtomHome = styled.button`
  background: ${(props) => (props.background ? props.background : "")};
  color: ${(props) => (props.color ? props.color : "")};
  cursor: pointer;
  font-size: 2em;
  font-weight: 500;
  padding: 1.5rem;
  border: ${(props) => (props.border ? props.border : "0")};
  transition: all 0.5s;
  border-radius: 2rem;
  min-width: 5em;
  position: relative;

  &::after {
    content: ">";
    font-weight: 400;
    position: absolute;
    left: 75%;
    top: 30%;
    right: 10%;
    bottom: 0;
    opacity: 0;
  }

  &:hover {
    transition: all 0.5s;
    border-radius: 2rem;
    padding: 1.5rem 3.5rem 1.5rem 1.5rem;

    &::after {
      opacity: 1;
      transition: all 0.5s;
    }
  }
`;

export default ButtomHome;
