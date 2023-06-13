import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// Imported components
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const Body = styled.div`
  height: 100%;
  width: 100%;

  .Container {
    background-size: 300% 300%;
    background-image: linear-gradient(
      -45deg,
      rgb(25, 26, 25) 0%,
      rgb(25, 26, 25) 25%,
      rgb(25, 26, 25) 51%,
      rgb(30, 81, 40) 100%
    );
    -webkit-animation: AnimateBG 20s ease infinite;
    animation: AnimateBG 20s ease infinite;

    @-webkit-keyframes AnimateBG {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes AnimateBG {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`;

function App() {
  return (
    <Router>
      <TopNav />
      <Body>
        <div className="Container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Hero />
                  <Skills />
                  <Projects />
                </div>
              }
            />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Body>
    </Router>
  );
}

export default App;
