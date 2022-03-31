import React from "react";
import styled from "styled-components";
import Search from "./Search";
import UploadJokes from "./UploadJokes";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <Logo>Make me Laugh😂 </Logo>
        <RightSide>
          <UploadJokes />
          <Search />
        </RightSide>
      </HeaderSection>
      <hr />
    </>
  );
};

export default Header;
const HeaderSection = styled.section`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Logo = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: x-large;
  font-weight: bolder;

  @media only screen and (max-width: 600px) {
    font-size: medium;
    transition: ease;
    transition-duration: 0.5s;
  }
`;

const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
