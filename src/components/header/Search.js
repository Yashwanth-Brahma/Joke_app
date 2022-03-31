import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useGlobalcontext } from "../../context/context";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const { jokestate, setSearchFilter } = useGlobalcontext();
  const { data: value } = jokestate;

  const debounce = (fn) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  };

  let deb = debounce(setSearchFilter);

  useEffect(() => {
    deb(
      value &&
        value.filter(
          (item) =>
            searchVal.toLowerCase() ===
            item.joke.slice(0, searchVal.length).toLowerCase()
        )
    );
  }, [searchVal, value, deb]);

  return (
    <>
      <SearchJokes
        type="text"
        name="search"
        placeholder="Search 'Jokes'"
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
    </>
  );
};

export default Search;

const SearchJokes = styled.input`
  border: 1px solid #dee2e6;
  border-radius: 18px;
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  padding: 0.5rem 1rem;
  outline: none;
  color: #8338ec;
  background: #f8f9fa;
  @media only screen and (max-width: 600px) {
    font-size: small;
    transition: ease;
    transition-duration: 0.5s;
  }
`;
