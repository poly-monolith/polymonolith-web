import styled, { keyframes } from "styled-components";
import { Link } from "react-router";
import { useState } from "react";

import logo from "../../images/logo.png";

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

  @media (max-width: 800px) {
    justify-content: end;
  }
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

  @media (max-width: 500px) {
    left: 1rem;
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
  display: ${(props) => (props.sidebarOpen ? "none" : "flex")};
  flex-direction: row;
  list-style: none;

  justify-content: center;
  align-items: center;
  /* padding-top: 1rem; */

  @media (max-width: 500px) {
    display: none;
  }
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

const NavBurger = styled.div`
  position: absolute;
  right: 3rem;
  color: white;

  cursor: pointer;

  transform: translateY(2px);

  display: none;
  @media (max-width: 500px) {
    display: block;
    right: 1rem;
  }
`;

const SidebarSlide = keyframes`
  0%{
    transform: translateX(11rem);
  }
  100%{
    transform: translateX(0rem);
  }
`;

const SidebarContainer = styled.div`
  display: ${(props) => (props.sidebarOpen ? "flex" : "none")};
  flex-direction: row;

  width: 100%;
  height: 100%;
  z-index: 2;

  transform: translateX(11rem);
  animation: ${(props) => (props.sidebarOpen ? SidebarSlide : "")} 0.2s forwards ease-in-out;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;
  align-items: start;

  position: absolute;
  right: 0;
  top: -1rem;

  background-color: rgb(23 24 29);
  width: 51vw;
  height: 99.5vh;

  border: solid black 5px;
  border-radius: 1rem 0 0 1rem;

  padding: 1rem 0rem 1rem 1.5rem;
`;

const SidebarFooter = styled.div`
  color: gray;
  position: absolute;
  bottom: 2rem;
  padding: 1rem 0;
  padding-left: 0.75rem;
`;

const Hidden = styled.div`
  width: 50vw;
  height: 100vh;
`;

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavbarDiv>
      <NavLinkLogo to="/">
        <NavLinkLogoImg src={logo} alt="polymonolith logo" />
        POLYMONOLITH
        <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </CaretSVG>
      </NavLinkLogo>
      <NavList sidebarOpen={sidebarOpen}>
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
        <NavLink to="/faq">
          FAQS
          <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </CaretSVG>
        </NavLink>
      </NavList>
      <NavBurger
        onClick={() => {
          setSidebarOpen(true);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </NavBurger>
      <SidebarContainer sidebarOpen={sidebarOpen}>
        <Hidden
          onClick={() => {
            setSidebarOpen(false);
          }}
        ></Hidden>
        <Sidebar>
          <NavLink
            to="/"
            onClick={() => {
              setSidebarOpen(false);
            }}
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            HOME{" "}
            <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </CaretSVG>
          </NavLink>
          <NavLink
            to="/colormesilly"
            onClick={() => {
              setSidebarOpen(false);
            }}
            style={{ marginBottom: "1rem" }}
          >
            <ColorMeSillyLink>COLOR ME SILLY</ColorMeSillyLink>
            <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </CaretSVG>
          </NavLink>
          <NavLink
            to="/faq"
            onClick={() => {
              setSidebarOpen(false);
            }}
            style={{ marginBottom: "1rem" }}
          >
            FAQS
            <CaretSVG xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </CaretSVG>
          </NavLink>
          <SidebarFooter>Thanks for visiting!</SidebarFooter>
        </Sidebar>
      </SidebarContainer>
    </NavbarDiv>
  );
}
