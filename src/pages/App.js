import styled from "styled-components";
import "./App.css";
import HeroBanner from "./components/Hero";

const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

function App() {
  return (
    <MainBody>
      <HeroBanner />
    </MainBody>
  );
}

export default App;
