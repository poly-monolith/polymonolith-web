import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

const NavbarDiv = styled.div`
  position: fixed;
  top: 0;

  width: 100vw;
  height: 2rem;

  background-color: #080808;
  color: #fcf6fe;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

const NavLinkLogo = styled(Link)`
  position: absolute;
  left: 2rem;

  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #dabce4;
  }

  &:visited {
    color: #fcf6fe;
  }
`;

const NavLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  margin: 0 2rem 0 0;

  &:hover {
    color: #dabce4;
  }

  &:visited {
    color: #fcf6fe;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export default function Navbar() {
  return (
    <NavbarDiv>
      <NavLinkLogo to="/">POLYMONOLITH</NavLinkLogo>
      <NavList>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/">MEDIA</NavLink>
        <NavLink to="/">FAQS</NavLink>
      </NavList>
    </NavbarDiv>
  );
}
