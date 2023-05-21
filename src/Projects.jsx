import styled from "styled-components";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Body = styled.div`
  height: 100vh;

  & .Parent {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & p {
      padding: 0 1em;
    }

    & .Child1,
    .Child2,
    .Child3 {
      width: 90%;

      & h2 {
        padding: 0 0.1em;
        margin: 0;
        font-size: 2em;
        text-align: center;
        color: rgb(25, 26, 25);
        background-color: rgb(78, 159, 61);
      }
    }

    .Child2 {
      margin-top: 2em;
      border: 1px solid rgb(78, 159, 61);
      background: rgb(0, 0, 0);
    }

    & .ProjectContainer > * {
      min-width: 100%;
      min-height: 50vh;
      padding-left: 1em;
    }

    .inactive {
      display: none;
    }

    .Arrows {
      display: flex;
      justify-content: space-between;
      margin: 1em;
      font-size: 1.5em;
      color: rgb(216, 233, 168);

      & :hover {
        color: rgb(78, 159, 61);
        cursor: pointer;
      }

      & > * {
        padding: 0.2em;
      }
    }
  }
`;

const Projects = () => {
  const [project, setProject] = useState(1);

  const handleLeftClick = () => {
    if (project > 1) {
      setProject(project - 1);
    } else {
      setProject(5);
    }
  };

  const handleRightClick = () => {
    if (project < 5) {
      setProject(project + 1);
    } else {
      setProject(1);
    }
  };

  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <h2>Projects</h2>
        </div>
        <div className="Child2">
          <div className="ProjectContainer">
            <div className={project === 1 ? "active" : "inactive"}>
              <h3>Project 1</h3>
            </div>
            <div className={project === 2 ? "active" : "inactive"}>
              <h3>Project 2</h3>
            </div>
            <div className={project === 3 ? "active" : "inactive"}>
              <h3>Project 3</h3>
            </div>
            <div className={project === 4 ? "active" : "inactive"}>
              <h3>Project 4</h3>
            </div>
            <div className={project === 5 ? "active" : "inactive"}>
              <h3>Project 5</h3>
            </div>
          </div>
          <div className="Arrows">
            <FaChevronLeft id="left" onClick={handleLeftClick} />
            <FaChevronRight id="right" onClick={handleRightClick} />
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Projects;
