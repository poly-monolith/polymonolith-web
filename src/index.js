import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import styled from "styled-components";
import "./index.css";

import App from "./pages/App";
import Navbar from "./pages/components/Navbar";
import ColorMeSilly from "./pages/ColorMeSilly";

import reportWebVitals from "./reportWebVitals";

const NavbarSpacerDiv = styled.div`
  width: 100vw;
  height: 2rem;
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <NavbarSpacerDiv />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ColorMeSilly" element={<ColorMeSilly />} />
      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
