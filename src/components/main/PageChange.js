import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useGlobalcontext } from "../../context/context";

const PageChange = () => {
  const [itemRange, setItemRange] = useState([0, 20]);
  const [pageNum, setPageNum] = useState(1);

  const { jokestate, setItem20, searchFilter } = useGlobalcontext();
  const { data: value } = jokestate;

  const handleNext = () => {
    if (itemRange[1] < value.length) {
      setItemRange((prev) => [prev[0] + 20, prev[1] + 20]);
      setPageNum((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    if (itemRange[0] > 0) {
      setItemRange((prev) => [prev[0] - 20, prev[1] - 20]);
      setPageNum((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (searchFilter)
      setItem20(
        searchFilter &&
          searchFilter.filter(
            (i, index) => index >= itemRange[0] && index <= itemRange[1]
          )
      );
    else
      setItem20(
        value &&
          value.filter(
            (i, index) => index >= itemRange[0] && index <= itemRange[1]
          )
      );
  }, [itemRange, value, searchFilter, setItem20]);

  return (
    <PageToggle>
      <>
        <button className="page" onClick={handleBack}>
          {"<"}{" "}
        </button>
        <span className="num"> {pageNum} </span>
        <button className="page" onClick={handleNext}>
          {">"}
        </button>
      </>
    </PageToggle>
  );
};

export default PageChange;

const PageToggle = styled.div`
  display: flex;
  justify-content: end;
  padding: 1.5rem 4rem;
  background-color: #f1faee;
  border: 1px solid #415a77;
  border-bottom: none;
  border-top: none;
  .page {
    border: 1px solid #8338ec;
    border-radius: 6px;
    color: #fff;
    background-color: #8338ec;
    font-size: 1rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    padding: 0.5rem 0.7rem;
    :hover {
      color: #8338ec;
      background-color: #fff;
      transition: ease;
      transition-duration: 0.2s;
    }
  }
  .num {
    padding: 0.5rem 0.7rem;
    font-weight: 400;
  }
`;
