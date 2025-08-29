import React from "react";
import styled from "styled-components";

import Footer from "./components/footer";

import sinNoise from "../images/SIN-NOISE.png";

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${sinNoise});
  background-size: 100%;
  background-repeat: repeat-y;
  background-position: center center;

  height: 100vh;
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
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SectionHeader = styled.h3`
  color: white;
  text-align: center;
`;

const AccordionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AccordionTitle = styled.h4`
  width: 100%;
  /* height: 5rem; */
  background-color: #253788;

  border: solid #0d185f 5px;
  /* border-radius: 1rem; */
  padding: 2rem;
`;

const AccordionBody = styled.div`
  width: 100%;
`;

export default function FAQ({}) {
  return (
    <FAQContainer>
      <FAQSection>
        <SectionHeader id="faq">FAQ</SectionHeader>
        <AccordionContainer>
          <AccordionTitle>What tools does our team use for our games?</AccordionTitle>
          <AccordionBody>
            <div>
              Our team uses a variety of tools covering our needs. Here is a small list of some of them!
              <ul>
                <li>Game Engine: Godot</li>
                <li>Illustrated Assets: Clip Studio Paint</li>
                <li>Pixel Art Assets: Aseprite</li>
                <li>Audio & SFX: FL Studio</li>
              </ul>
            </div>
          </AccordionBody>
        </AccordionContainer>
      </FAQSection>
      <Footer />
    </FAQContainer>
  );
}
