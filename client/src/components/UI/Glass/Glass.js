import styled from "styled-components";

const Glass = styled.div`
  position: relative;
  background: white;
  margin: 0.5rem;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(3rem);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  @media only screen and (min-width: 768px) {
    margin: 4rem;
  }
`;

export default Glass;
