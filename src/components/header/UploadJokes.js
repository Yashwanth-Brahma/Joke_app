import React from "react";
import { useState } from "react";
import styled from "styled-components";
import UploadModal from "./UploadModal";

const UploadJokes = () => {
  const [close, setClose] = useState(true);

  return (
    <>
      <UploadBtn onClick={() => setClose(false)}>Upload Joke</UploadBtn>
      {!close ? <UploadModal setClose={setClose} /> : ""}
    </>
  );
};

export default UploadJokes;

const UploadBtn = styled.button`
  border: none;
  border-radius: 6px;
  color: #fff;
  background-color: #8338ec;
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  padding: 0.5rem 0.7rem;
  :hover {
    border: 1px solid #8338ec;
    color: #8338ec;
    background-color: #fff;
    transition: ease;
    transition-duration: 0.2s;
  }
  @media only screen and (max-width: 600px) {
    font-size: small;
    transition: ease;
    transition-duration: 0.5s;
  }
`;
