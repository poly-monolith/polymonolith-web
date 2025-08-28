import { useState } from "react";
import styled, { keyframes } from "styled-components";

import Footer from "./components/footer";
import ScreenshotModal from "./components/ScreenshotModal";

import landingvideo from "../images/ColorMeSilly-LandingPage.mp4";
import gameplayEarly from "../images/gameplay-early-screenshot.png";
import gameplayLate from "../images/gameplay-late-screenshot.png";
import hiscores from "../images/hiscores-screenshot.png";
import sinNoise from "../images/SIN-NOISE.png";
import scrollingBG from "../images/scrollingbg-wip-short.gif";

const ColorMeSillyBody = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${sinNoise});
  background-size: 100%;
  background-repeat: repeat-y;
  background-position: center center;

  color: white;
`;

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  align-self: center;
  color: white;
  font-size: 24px;
  width: 60%;
  padding: 2rem;
`;

const SectionItem = styled.div`
  padding: 1rem;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;

  /* border: solid white 5px; */
  border-radius: 5px;
  margin: 2rem 0;
`;

const Landingvideo = styled.video`
  /* pointer-events: none; */
  /* width: 100%; */
  /* height: 640px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* margin: 1rem 0; */
`;

const ScreenshotList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 71.85%;
`;

const ScreenshotImg = styled.img`
  /* width: calc(1024px / 3 - 0.65rem); */
  width: 32.3%;
  height: auto;
  margin: 0 0.5rem;
  border: solid white 2px;
  border-radius: 5px;

  opacity: 1;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const YoutubeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 72%;
`;

const YoutubeFrame = styled.iframe`
  /* width: 64rem; */
  /* height: 100%; */
  margin: 1rem 0;

  aspect-ratio: 16 / 9;
  width: 100% !important;
`;

const ColorRotation = keyframes`
  0%{filter: hue-rotate(0deg);}
  100%{filter: hue-rotate(360deg);}
`;

const EmphasisSpan = styled.span`
  font-weight: bold;
  color: gold;
  padding: 1rem;
  &:hover {
    color: #fff180;
    animation: ${ColorRotation} 3s infinite;
  }

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const EmphasisHeader = styled.h3`
  font-weight: bold;
  color: gold;
  &:hover {
    color: #fff180;
    animation: ${ColorRotation} 3s infinite;
  }
`;

export default function ColorMeSilly({}) {
  const [showScreenshotOne, setShowOne] = useState(false);
  const [showScreenshotTwo, setShowTwo] = useState(false);
  const [showScreenshotThree, setShowThree] = useState(false);

  return (
    <ColorMeSillyBody>
      <VideoContainer>
        <Landingvideo autoPlay muted playsInline loop infinite>
          <source src={landingvideo} type="video/mp4" />
        </Landingvideo>
      </VideoContainer>
      <DescriptionSection>
        <SectionItem>
          <EmphasisSpan>Color Me Silly</EmphasisSpan>
          is a memory, brain teaser game where you're challenged to decipher the key to choose the right card. Push the limits of your memory and
          compete against yourself and others with our online leaderboards!
        </SectionItem>
      </DescriptionSection>
      <MediaContainer>
        <h3>Screenshots</h3>
        <ScreenshotList>
          <ScreenshotImg
            src={gameplayEarly}
            onClick={() => {
              setShowOne(true);
            }}
          />
          <ScreenshotImg
            src={gameplayLate}
            onClick={() => {
              setShowTwo(true);
            }}
          />
          <ScreenshotImg
            src={hiscores}
            onClick={() => {
              setShowThree(true);
            }}
          />
        </ScreenshotList>
        <YoutubeContainer>
          <YoutubeFrame
            src="https://www.youtube.com/embed/yQZ_hSR_w9k?si=GWoYPpOmkx4IS8nm"
            title="Color Me Silly Youtube Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </YoutubeContainer>
      </MediaContainer>
      <ScreenshotModal
        image={gameplayEarly}
        show={showScreenshotOne}
        close={() => {
          setShowOne(false);
        }}
      />
      <ScreenshotModal
        image={gameplayLate}
        show={showScreenshotTwo}
        close={() => {
          setShowTwo(false);
        }}
      />
      <ScreenshotModal
        image={hiscores}
        show={showScreenshotThree}
        close={() => {
          setShowThree(false);
        }}
      />
      <DescriptionSection>
        <SectionItem style={{ textAlign: "center" }}>
          <EmphasisHeader>Challenge Your Mind!</EmphasisHeader>
          <EmphasisSpan>Confusing to look at, easy to intuit, but hard to master!</EmphasisSpan>
        </SectionItem>
        <SectionItem>
          Challenge your mind to solve each round's puzzle as you gradually become fluent in the language of Color Me Silly. Fun for all ages, play
          Color Me Silly and impress your friends and family with your ability to decipher the code of numbers, colors, and shapes!
        </SectionItem>
      </DescriptionSection>
      <VideoContainer>
        <img
          src={scrollingBG}
          alt="scrolling gif of cards"
          style={{ overflow: "none", width: "72%", height: "10rem", objectFit: "cover", marginTop: "1rem" }}
        />
      </VideoContainer>
      <DescriptionSection>
        <SectionItem>
          Inspired by memory and brainteaser games, with the goal of creating a game that looks confusing at first but can be simplified into easy
          heuristics that gets more intuitive as you play more..
          <EmphasisSpan>Color Me Silly</EmphasisSpan>
          was born and is finally playable!
        </SectionItem>
        <SectionItem>
          Made with love and care by the solo developer, <EmphasisSpan>not_absent</EmphasisSpan>! This game is my first game project release, and with
          lots of struggles and learning the first demo is live! Special thanks to friends and family! And the amazing Zane Fadul for helping with the
          trailer!
        </SectionItem>
      </DescriptionSection>

      <DescriptionSection>
        <SectionItem style={{ textAlign: "center" }}>
          <EmphasisHeader>Future Plans</EmphasisHeader>
        </SectionItem>
        <SectionItem>
          There are still several features, rewards, and additions that are in the works and will slowly be added as we ramp up towards a full release
          on Steam, Android, Web, and Itch.
        </SectionItem>
        <SectionItem>
          Here are a few of the current features in development:
          <ul>
            <li>Daily global seeded puzzles! Compete with friends and see who can solve the puzzle first!</li>
            <li>Gameplay rewards: cosmetic varieties, custom difficulty scaling & point rewards!</li>
            <li>Fixing options & settings</li>
            <li>Squashing bugs that I'm sure we'll run into together as the game goes live!</li>
            <li>
              <EmphasisSpan>COLOR ME MATH?</EmphasisSpan>
            </li>
          </ul>
        </SectionItem>
      </DescriptionSection>
      <Footer />
    </ColorMeSillyBody>
  );
}
