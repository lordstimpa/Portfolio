import styled from "styled-components";
import TopNav from "./TopNav";
import Hero from "./Hero";
import Skills from "./Skills";

const Body = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Body>
      <div className="innerParent">
        <TopNav />
        <Hero />
        <Skills />
      </div>
    </Body>
  );
}

export default App;
