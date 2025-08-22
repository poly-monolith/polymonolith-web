import react from "react";
import { Link } from "react-router";
import styled from "styled-components";
import Parallax from "parallax-js";

import polymonolith from "../../images/polymonolith-icon.png";
import logoBG from "../../images/logo-bg.png";
import logoFront from "../../images/logo-front-monolith.png";
import logoSides from "../../images/logo-side-monoliths.png";
import logoText from "../../images/logo-text.png";

const HeroSection = styled.div`
  width: 100vw;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function HeroBanner() {
  return (
    <HeroSection>
      <img src={polymonolith} />
    </HeroSection>
  );
}
