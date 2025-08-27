import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router";

import logo from "../../images/logo.png";
import upcaret from "../../images/caret-up-fill.svg";

const NavbarDiv = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;

  width: 100vw;
  height: 2rem;

  background-color: #080808;
  /* background-color: red; */
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
  transform: translateY(2px);
`;

const CaretRotation = keyframes`
  0%{
    opacity: 0%;
    transform: rotate(0) translateY(-15px);
  }
  80%{
    opacity: 100%;
    transform: rotate(-105deg) translateY(2px);
  }
  90%{
    opacity: 100%;
    transform: rotate(-80deg) translateY(-1px);
  }
  100%{
    opacity: 100%;
    transform: rotate(-90deg) translateY(0px);
  }
`;

const ButtonShake = keyframes`
  0%{
    transform: translateY(0px);
  }
  30%{
    transform: translateY(-3px);
  }
  60%{
    transform: translateY(2px);
  }
  100%{
    transform: translateY(0px);
  }
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
    animation: ${ButtonShake} 0.2s forwards;
  }

  &:hover svg {
    display: block;
    transform-origin: 50% 50%;
    animation: ${CaretRotation} 0.25s forwards;
  }

  /* &:visited {
    color: #fcf6fe;
  } */
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  text-decoration: none;
  margin: 0 2rem 0 0;
  color: #fcf6fe;

  transition: 0.1s ease-in-out;

  &:hover {
    color: #dabce4;
    animation: ${ButtonShake} 0.2s forwards;
  }

  &:hover svg {
    display: block;
    transform-origin: 50% 50%;
    animation: ${CaretRotation} 0.25s forwards;
  }

  /* &:visited {
    color: #fcf6fe;
  } */
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  justify-content: center;
  align-items: center;
  /* padding-top: 1rem; */
`;

const CaretSVG = styled.svg`
  /* height: 2rem;
  width: 2rem; */
  color: white;
  padding-right: 0.25rem;
  opacity: 0%;

  transition: 0.1s ease-in-out;
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
        <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </CaretSVG>
      </NavLinkLogo>
      <NavList>
        <NavLink to="/">
          HOME{" "}
          <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </CaretSVG>
        </NavLink>
        <NavLink to="/colormesilly">
          <ColorMeSillyLink>COLOR ME SILLY</ColorMeSillyLink>
          <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </CaretSVG>
        </NavLink>
        <NavLink to="/">
          FAQS
          <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </CaretSVG>
        </NavLink>
      </NavList>
    </NavbarDiv>
  );
}
