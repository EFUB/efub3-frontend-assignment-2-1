import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavBar = () => {
  return (
    <Root>
      <SNavLink
        to="search"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        검색
      </SNavLink>
      <SNavLink
        to="diary-edit"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        일기 쓰기
      </SNavLink>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  padding: 5px;
`;

const SNavLink = styled(NavLink)`
  &.active {
    color: black;
    font-weight: bold;
  }
  color: grey;
  margin-right: 10px;
  text-decoration: none;
  font-size: 20px;
`;

export default NavBar;
