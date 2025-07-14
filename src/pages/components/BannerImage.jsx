import react from "react";
import { Link } from "react-router";
import styled from "styled-components";

const BannerSection = styled.div`
  background-color: #19161b;
  width: 100vw;
  height: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function BannerImg({ image }) {
  return (
    <BannerSection>
      <Link to="/colormesilly">
        <img src={image} />
      </Link>
    </BannerSection>
  );
}
