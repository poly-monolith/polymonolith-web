import react from "react";
import styled from "styled-components";

import Footer from "./components/footer";

import landingvideo from "../images/ColorMeSilly-LandingPage.mp4";
import gameplayEarly from "../images/gameplay-early-screenshot.png";
import gameplayLate from "../images/gameplay-late-screenshot.png";
import hiscores from "../images/hiscores-screenshot.png";
import sinNoise from "../images/SIN-NOISE.png";

const ColorMeSillyBody = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${sinNoise});
  background-size: 100%;
  background-repeat: repeat-y;
  background-position: center center;

  color: white;
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

  margin: 1rem 0;
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

export default function ColorMeSilly({}) {
  return (
    <ColorMeSillyBody>
      <VideoContainer>
        <Landingvideo autoPlay muted playsInline loop infinite>
          <source src={landingvideo} type="video/mp4" />
        </Landingvideo>
      </VideoContainer>
      <MediaContainer>
        <h3>Screenshots</h3>
        <ScreenshotList>
          <ScreenshotImg src={gameplayEarly} />
          <ScreenshotImg src={gameplayLate} />
          <ScreenshotImg src={hiscores} />
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
      <p>
        Color Me Silly is a memory, brain teaser game where you're challenged to push the limits as the game gets harder and new mechanics are
        introduced. Decipher the key to choose the right card, and compete against yourself and others with our self-hosted leaderboards!
      </p>{" "}
      <p>
        Challenge Your Mind! Confusing to look at, easy to intuit, but hard to master! Challenge your mind to solve each round's puzzle as you
        gradually become fluent in the language of Color Me Silly. Fun for all ages, play Color Me Silly and impress your friends and family with your
        ability to decipher the code of numbers, colors, and shapes!
      </p>{" "}
      <p>
        mascot Mascot going silly playing Color Me Silly Developed By Some Guy! Inspired by memory and brainteaser games, with the goal of creating a
        game that looks confusing at first but can be simplified into easy heuristics that gets more intuitive as you play more.. Color Me Silly was
        born and is finally playable! Made with love and care by the solo developer, not_absent! This game is my first game project release, and with
        lots of struggles and learning the first demo is live!
      </p>
      <p>
        Future Plans There are still several features, rewards, and additions that are in the works and will slowly be added as we ramp up towards a
        full release on Steam, Android, Web, and Itch. Here are a few of the current features in development: - Daily global seeded puzzles! Compete
        with friends and see who can solve the puzzle first! - Gameplay rewards: cosmetic varieties, custom difficulty scaling & point rewards! -
        Fixing options & settings - Squashing bugs that I'm sure we'll run into together as the game goes live!
      </p>{" "}
      <Footer />
    </ColorMeSillyBody>
  );
}
