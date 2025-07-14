import styled from "styled-components";
import "./App.css";
import HeroBanner from "./components/Hero";
import BannerImg from "./components/BannerImage";

import ColormesillyBanner from "../images/itch-banner.gif";

const MainBody = styled.div`
  background-color: #19161b;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
        <BannerImg image={ColormesillyBanner} />
      </BannerSection>
    </MainBody>
  );
}

export default App;
