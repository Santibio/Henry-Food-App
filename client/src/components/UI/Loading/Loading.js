import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

const Spinner = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border-left-color: #09f;
  overflow: hidden;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = (props) => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default Loading;
