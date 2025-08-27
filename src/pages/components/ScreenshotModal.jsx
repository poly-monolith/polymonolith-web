import React from "react";
import styled, { keyframes } from "styled-components";

const ScreenshotModalContainer = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;

  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  background-color: #000000bc;
  top: 0;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const ImgJuice = keyframes`
    0%{
        transform: scale(0.0, 0.0);
    }
    80%{
        transform: scale(1.025, 1.025);
    }

    100%{
        transform:scale(1.0, 1.0);
    }
`;

const ModalImg = styled.img`
  border: solid white 3px;
  border-radius: 10px;

  width: 75%;
  height: auto;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  animation: ${(props) => (props.show ? ImgJuice : "")} 0.25s forwards;
`;

export default function ScreenshotModal({ image, show, close }) {
  return (
    <ScreenshotModalContainer
      show={show}
      onClick={() => {
        close();
      }}
    >
      <ModalImg src={image} show={show} />
    </ScreenshotModalContainer>
  );
}
