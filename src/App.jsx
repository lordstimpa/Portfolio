import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

// Imported components
import TopNav from "./TopNav";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Resume from "./sub-pages/Resume";
import Contact from "./sub-pages/Contact";
import NotFound from "./sub-pages/NotFound";
import Footer from "./Footer";

const Body = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <Body>
        <TopNav />
        <div className="innerParent">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Hero /> <Skills /> <Projects />
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
