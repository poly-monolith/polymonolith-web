import react from "react";
import { Link } from "react-router";
import styled from "styled-components";

const BannerSection = styled.div`
  width: 100vw;
  /* height: 25rem; */

  display: flex;
  align-items: center;
  justify-content: center;

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

const BannerLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerImg = styled.img`
  width: 80%;
  border: solid white 3px;
  border-radius: 1rem;

  box-shadow: 0 0.75rem 0 0 black;

  transition: 0.05s ease-in-out;

  &:hover {
    transform: scale(1.025, 1.025);
    border-width: 4px;
    box-shadow: 0 1rem 0 0 black;
  }
`;

export default function Banner({ image, link }) {
  return (
    <BannerSection>
      <BannerLink to={link}>
        <BannerImg src={image} />
      </BannerLink>
    </BannerSection>
  );
}
