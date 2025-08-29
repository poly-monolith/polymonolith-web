import react from "react";
import styled from "styled-components";
import { Link } from "react-router";

const FooterBody = styled.div`
  background-color: #050505;
  width: 100%;
  height: 8rem;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  padding: 1rem 0rem;

  position: relative;
  bottom: 0;
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: start;
  /* padding: 1rem 3rem; */
  margin: 0 2rem;

  font-weight: bold;
  font-size: 20px;

  @media (max-width: 500px) {
    font-size: 14px;
  }

  width: 50%;
  /* width: 10rem; */
  /* height: 10rem; */
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function Footer({}) {
  return (
    <FooterBody>
      <FooterCol>
        <div>Contact us!</div>
        <a href="mailto:absent@polymonolith.com" style={{ color: "blueviolet" }}>
          absent@polymonolith.com
        </a>
      </FooterCol>
      <FooterCol>
        {" "}
        Pages:
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/colormesilly">Color Me Silly</FooterLink>
        <FooterLink to="/faq">FAQ</FooterLink>
      </FooterCol>
    </FooterBody>
  );
}
