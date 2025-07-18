import react from "react";
import styled from "styled-components";
import landingvideo from "../images/ColorMeSilly-LandingPage.mp4";

const Landingvideo = styled.video`
  /* pointer-events: none; */
  width: 100vw;
  height: 640px;
`;

export default function ColorMeSilly({}) {
  return (
    <div>
      <Landingvideo autoPlay muted playsInline loop>
        <source src={landingvideo} type="video/mp4" />
      </Landingvideo>
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
    </div>
  );
}
