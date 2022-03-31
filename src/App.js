import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import JokesContainer from "./components/main/JokesContainer";

const App = () => {
  return (
    <Container>
      <Header />
      <JokesContainer />
    </Container>
  );
};

export default App;
const Container = styled.div`
  width: 65vw;
  border-radius: 12px;
  margin-top: 3rem;
  background: #fff;
  box-shadow: 8px 8px 8px #888888;
  @media only screen and (max-width: 1200px) {
    width: 80vw;
    transition: ease;
    transition-duration: 0.5s;
  }
  @media only screen and (max-width: 1000px) {
    width: 90vw;
    transition: ease;
    transition-duration: 0.5s;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    transition: ease;
    transition-duration: 0.5s;
  }
`;
