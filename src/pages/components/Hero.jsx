import react, { useEffect, useRef } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import Parallax from "parallax-js";

import polymonolith from "../../images/polymonolith-icon.png";

const HeroSection = styled.div`
  width: 100vw;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  user-select: none;
`;

const ParallaxDiv = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column;
`;
export default function HeroBanner({ parallaxImgs }) {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (parallaxImgs === undefined || sceneRef.current === null) {
      return;
    }

    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();
  }, []);

  return (
    <HeroSection>
      {Array.isArray(parallaxImgs) ? (
        <div data-relative-input="true" ref={sceneRef}>
          <ParallaxDiv data-depth="0.2" style={{ display: "flex", flexDirection: "column" }}>
            <img src={parallaxImgs[0]} alt="" />
            <img src={parallaxImgs[3]} alt="" />
          </ParallaxDiv>

          <div data-depth="0.3">
            <img src={parallaxImgs[1]} alt="" />
          </div>
          <div data-depth="0.4">
            <img src={parallaxImgs[2]} alt="" />
          </div>
        </div>
      ) : (
        <img src={polymonolith} alt="" />
      )}
    </HeroSection>
  );
}
