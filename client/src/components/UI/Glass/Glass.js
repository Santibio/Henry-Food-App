import styled from "styled-components";

const Glass = styled.div`
  position: relative;
  background: white;
 /*  height: 90vh; */
  /* max-width: ${(props) => (props.width ? props.width : "90%")}; */
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(3rem);
  overflow: hidden
  /* @media only screen and (max-width: 820px) {
    width: 95%; */
    /* min-height: 98vh; */
 /*  }
  @media only screen and (max-width: 400px) {
    width: 95%; */
   /*  height: auto; */
/*   } */
`;

export default Glass;
