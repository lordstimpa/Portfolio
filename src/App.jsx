import styled from "styled-components";
import TopNav from "./TopNav";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";

const Body = styled.div`
  height: 100%;
  width: 100%;

  & .innerParent > * {
    border-bottom: 1px solid white;
  }
`;

function App() {
  return (
    <Body>
      <TopNav />
      <div className="innerParent">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </Body>
  );
}

export default App;
