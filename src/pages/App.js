import styled from "styled-components";
import "./App.css";
import HeroBanner from "./components/Hero";
import Banner from "./components/BannerImage";

import ColormesillyBanner from "../images/itch-banner.gif";

const MainBody = styled.div`
  /* background-color: #19161b; */
  background-color: black;
  display: flex;
  flex-direction: column;
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
  return (
    <MainBody>
      <HeroBanner />
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
