import styled from "styled-components";
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
  background-size: cover;
  background-repeat: "repeat-y";
  background-position: center center;

  height: 100vh;
`;

const AboutSection = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const BannerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmphasisSpan = styled.span`
  font-weight: bold;
  color: gold;
`;

function App() {
  const parallaxImgs = [logoBG, logoSides, logoFront, logoText];

  return (
    <MainBody>
      <HeroBanner parallaxImgs={parallaxImgs} />
      <AboutSection>
        <EmphasisSpan>POLYMONOLITH</EmphasisSpan> is a independent video game studio developing games with a unique flavor that seek to challenge the
        player.
      </AboutSection>
      <BannerSection>
        <Banner image={ColormesillyBanner} link={"/ColorMeSilly"} />
      </BannerSection>
    </MainBody>
  );
}

export default App;
