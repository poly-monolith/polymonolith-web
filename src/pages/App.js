import styled, { keyframes } from "styled-components";
import "./App.css";
import HeroBanner from "./components/Hero";
import Banner from "./components/BannerImage";

import ColormesillyBanner from "../images/itch-banner.gif";
import logoBG from "../images/logo-bg.png";
import logoFront from "../images/logo-front-monolith.png";
import logoSides from "../images/logo-side-monoliths.png";
import logoText from "../images/logo-text.png";
import sinNoise from "../images/SIN-NOISE.png";

const MainBody = styled.div`
  /* background-color: #19161b; */
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  background-image: url(${sinNoise});
  background-size: 100%;
  background-repeat: repeat-y;
  background-position: center center;
  /* margin: 0;
  padding: 0; */
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  align-self: center;
  color: white;
  font-size: 24px;
  width: 25%;
  padding: 2rem;
`;
const SectionItem = styled.div`
  padding: 1rem;
`;

const BannerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SectionHeader = styled.h2`
  color: white;
  text-align: center;
`;

const ColorRotation = keyframes`
  0%{filter: hue-rotate(0deg);}
  100%{filter: hue-rotate(360deg);}
`;

const EmphasisSpan = styled.span`
  font-weight: bold;
  color: gold;
  &:hover {
    color: #fff180;
    animation: ${ColorRotation} 3s infinite;
  }
`;

const Footer = styled.div`
  color: white;
`;

function App() {
  const parallaxImgs = [logoBG, logoSides, logoFront, logoText];

  return (
    <MainBody>
      <HeroBanner parallaxImgs={parallaxImgs} />
      <AboutSection>
        <SectionItem>Hey!</SectionItem>
        <SectionItem>
          <EmphasisSpan>POLYMONOLITH</EmphasisSpan> is an independent video game studio striving to develop games with a unique esoteric aesthetic
          that seek to challenge the player.
        </SectionItem>
        <SectionItem>
          Currently we are working on preparing for the release and publishing of <EmphasisSpan>Color Me Silly</EmphasisSpan>!
        </SectionItem>
        <SectionItem>Here are some of our projects:</SectionItem>
      </AboutSection>

      <BannerSection>
        <Banner image={ColormesillyBanner} link={"/ColorMeSilly"} />
      </BannerSection>
      <AboutSection>
        <SectionHeader>Meet the Team!</SectionHeader>
        <SectionItem>NOTABSENT</SectionItem>
      </AboutSection>

      <Footer>Contact us</Footer>
    </MainBody>
  );
}

export default App;
