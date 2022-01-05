import styled from "styled-components";

const Circle = styled.div`
  background: ${(props) => (props.color ? props.color : "")};
  height: ${(props) => (props.size ? props.size : "")};
  width: ${(props) => (props.size ? props.size : "")};
  position: absolute;
  border-radius: 50%;
  top: ${(props) => (props.top ? props.top : "")};
  right: ${(props) => (props.right ? props.right : "")};
  left: ${(props) => (props.left ? props.left : "")};
  bottom: ${(props) => (props.bottom ? props.bottom : "")};
  z-index: ${(props) => (props.zindex ? props.zindex : "")};
`;
export default Circle