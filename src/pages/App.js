import styled, { keyframes } from "styled-components";
import "./App.css";

import HeroBanner from "./components/Hero";
import Banner from "./components/BannerImage";
import Footer from "./components/footer";

import ColormesillyBanner from "../images/itch-banner.gif";
import logoBG from "../images/logo-bg.png";
import logoFront from "../images/logo-front-monolith.png";
import logoSides from "../images/logo-side-monoliths.png";
import logoText from "../images/logo-text.png";
import sinNoise from "../images/SIN-NOISE.png";
import absentIcon from "../images/no4-icon.png";
import { useEffect, useRef, useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";

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
  width: 22.5rem;
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

const SectionHeader = styled.h3`
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

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const ShowTeam = keyframes`
  0% {
    opacity: 0%;
    transform: translateY(10rem);
  }
  100% {
    opacity: 100%;
    transform: translateY(0);
  }
`;

const SectionTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: white;

  opacity: 0%;
  animation: ${(props) => (props.TeamVisible ? ShowTeam : "")} 1s forwards;
`;

const TeamContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  transition: 0.05s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const SectionTeamIcon = styled.img`
  width: 9rem;
  height: 9rem;
  border: solid white 3px;
  border-radius: 1rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const TextIcon = styled.div`
  font-size: 6rem;
  font-weight: bold;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;

  width: 9rem;
  height: 9rem;

  border: solid white 3px;
  border-radius: 1rem;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  color: white;
  font-size: 24px;
  /* width: 22.5rem; */
  padding: 0 0 5rem;

  /* width: 40rem; */
`;

const FAQAccordion = styled(Accordion)`
  width: 40rem;
  padding: 1rem;

  background-color: #080808;
`;

function App() {
  const [TeamVisible, SetTeamVisible] = useState(false);
  const teamref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => SetTeamVisible(entry.isIntersecting));

    observer.observe(teamref.current);
  }, []);

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
        <SectionHeader>Meet the team!</SectionHeader>
        <SectionItem>
          <SectionTeam TeamVisible={TeamVisible}>
            <TeamContent>
              <SectionTeamIcon src={absentIcon} />
              <EmphasisSpan>not_absent</EmphasisSpan>
              Developer & Artist
            </TeamContent>
          </SectionTeam>
        </SectionItem>
        <SectionItem ref={teamref}>
          <SectionTeam TeamVisible={TeamVisible}>
            <TeamContent>
              <TextIcon>
                <EmphasisSpan>?</EmphasisSpan>
              </TextIcon>
              <EmphasisSpan>more..?</EmphasisSpan>
            </TeamContent>
          </SectionTeam>
        </SectionItem>
      </AboutSection>

      <FAQSection>
        <SectionHeader id="faq">FAQ</SectionHeader>
        <h3>What tools does our team use for our games?</h3>
        <div>
          Our team uses a variety of tools covering our needs. Here is a small list of some of them!
          <ul>
            <li>Game Engine: Godot</li>
            <li>Illustrated Assets: Clip Studio Paint</li>
            <li>Pixel Art Assets: Aseprite</li>
            <li>Audio & SFX: FL Studio</li>
          </ul>
        </div>
      </FAQSection>
      <Footer />
    </MainBody>
  );
}

export default App;
