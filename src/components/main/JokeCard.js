import React from "react";
import styled from "styled-components";

const JokeCard = ({ joke }) => {
  return <Joke>{joke}</Joke>;
};

export default JokeCard;

const Joke = styled.div`
  border: none;
  border-radius: 6px;
  padding: 2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: medium;
  font-weight: 600;
  background-color: #fff;
  width: 20%;
  :hover {
    box-shadow: 4px 4px 4px #ff8fa3;
    color: #ff4d6d;
  }
  @media only screen and (max-width: 900px) {
    width: 30%;
    transition: ease;
    transition-duration: 0.5s;
  }
  @media only screen and (max-width: 768px) {
    width: 50%;
    transition: ease;
    transition-duration: 0.5s;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
    transition: ease;
    transition-duration: 0.5s;
  }
`;
