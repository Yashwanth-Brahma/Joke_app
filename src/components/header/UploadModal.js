import React from "react";
import { useRef } from "react";
import styled from "styled-components";

import { useGlobalcontext } from "../../context/context";

const UploadModal = ({ setClose }) => {
  const jokeInRef = useRef();
  const { setAddedNew } = useGlobalcontext();

  const handleClose = (e) => {
    if (e.target.classList.contains("bg")) setClose(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let now = new Date();
    const arrObj = [
      {
        id: Number(
          now.getDate().toString() +
            now.getHours().toString() +
            now.getSeconds()
        ),
        joke: jokeInRef.current.value,
      },
    ];

    const prev = JSON.parse(localStorage.getItem("jokes"));
    if (prev === null || prev === undefined) {
      localStorage.setItem("jokes", JSON.stringify(arrObj));
    } else {
      arrObj.push(...prev);
      localStorage.setItem("jokes", JSON.stringify(arrObj));
    }
    setAddedNew(true);
    setClose(true);
    jokeInRef.current.value = "";
  };

  return (
    <ModalContainer className="bg" onClick={handleClose}>
      <Modal onSubmit={handleClick}>
        <label htmlFor="joke" className="title">
          Joke
        </label>
        <JokesInput
          type="text"
          id="joke"
          placeholder="Write some Joke..."
          required
          ref={jokeInRef}
        />
        <UploadBtn type="submit">Upload</UploadBtn>
        <CancleBtn onClick={() => setClose(true)}>Cancle</CancleBtn>
      </Modal>
    </ModalContainer>
  );
};

export default UploadModal;

const ModalContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;
const Modal = styled.form`
  background-color: #fff;
  width: 500px;
  height: 40vh;
  margin-top: 5rem;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.7rem;
  .title {
    color: #8338ec;
    font-weight: bold;
  }
`;
const JokesInput = styled.input`
  padding: 0.5rem 0.5rem;
  font-size: medium;
  border-radius: 4px;
  border: 1px solid #000;
  color: #8338ec;
  outline: none;
`;

const CancleBtn = styled.button`
  border: 1px solid #8338ec;
  border-radius: 6px;
  color: #8338ec;
  background-color: #fff;
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  padding: 0.5rem 0.7rem;
  :hover {
    border: none;
    color: #fff;
    background-color: #8338ec;
    transition: ease;
    transition-duration: 0.2s;
  }
`;
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
`;
