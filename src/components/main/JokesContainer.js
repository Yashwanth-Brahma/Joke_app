import React from "react";
import styled from "styled-components";
import { useGlobalcontext } from "../../context/context";
import JokeCard from "./JokeCard";
import PageChange from "./PageChange";

const JokesContainer = () => {
  const { jokestate, item20 } = useGlobalcontext();
  const { loading, error } = jokestate;
  return (
    <>
      <PageChange />
      {loading ? (
        <Message>Loading...</Message>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <JokesSection>
          {item20 &&
            item20.map((item) => {
              const { joke, id } = item;
              return <JokeCard joke={joke} key={id} />;
            })}
        </JokesSection>
      )}
    </>
  );
};

export default JokesContainer;
const JokesSection = styled.div`
  background-color: #f1faee;
  padding: 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  border: 1px solid #415a77;

  border-top: none;
  border-radius: 14px;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
`;

const Message = styled.div`
  text-align: center;
  margin: 3rem 0;
  font-size: x-large;
  color: #8338ec;
  font-weight: bold;
  padding-bottom: 3rem;
`;
