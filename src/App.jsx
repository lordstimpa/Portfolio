import styled from "styled-components";
import TopNav from "./TopNav";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Body = styled.div`
  height: 100%;
  width: 100%;
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
      <Footer />
    </Body>
  );
}

export default App;
