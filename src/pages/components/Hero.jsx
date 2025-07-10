import react from "react";
import { Link } from "react-router";
import styled from "styled-components";

import polymonolith from "../../images/polymonolith-icon.png";

const HeroSection = styled.div`
  background-color: #19161b;
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
