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
`;

function App() {
  return (
    <Router>
      <TopNav />
      <Body>
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
