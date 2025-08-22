import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router";

import logo from "../../images/logo.png";

const NavbarDiv = styled.div`
  position: fixed;
  top: 0;

  width: 100vw;
  height: 2rem;

  background-color: #080808;
  color: #fcf6fe;

  display: flex;
  flex-direction: row;
  font-size: 20px;

  align-items: center;
  justify-content: center;
`;

const NavLinkLogoImg = styled.img`
  height: 1.5rem;
  padding-right: 0.5rem;
`;

const NavLinkLogo = styled(Link)`
  position: absolute;
  left: 2rem;

  font-weight: bold;
  text-decoration: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fcf6fe;

  transition: 0.1s ease-in-out;

  &:hover {
    color: #dabce4;
  }

  /* &:visited {
    color: #fcf6fe;
  } */
`;

const NavLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  margin: 0 2rem 0 0;
  color: #fcf6fe;

  transition: 0.1s ease-in-out;

  &:hover {
    color: #dabce4;
  }

  /* &:visited {
    color: #fcf6fe;
  } */
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const ColorRotation = keyframes`
  0%{filter: hue-rotate(0deg);}
  100%{filter: hue-rotate(360deg);}
`;

const ColorMeSillyLink = styled.div`
  &:hover {
    color: #fff180;
    animation: ${ColorRotation} 3s infinite;
  }
`;

export default function Navbar() {
  return (
    <NavbarDiv>
      <NavLinkLogo to="/">
        <NavLinkLogoImg src={logo} alt="polymonolith logo" />
        POLYMONOLITH
      </NavLinkLogo>
      <NavList>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/colormesilly">
          <ColorMeSillyLink>COLOR ME SILLY</ColorMeSillyLink>
        </NavLink>
        <NavLink to="/">FAQS</NavLink>
      </NavList>
    </NavbarDiv>
  );
}
