import styled from "styled-components";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import megrey from "./assets/megrey.png";

const Body = styled.div`
  height: 100vh;

  & .Parent {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h2 {
      padding: 0 0.1em;
      margin: 0;
      font-size: 2em;
      text-align: center;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }

    & h3 {
      margin: 1em;
      color: rgb(78, 159, 61);
    }

    & p {
      margin: 0.5em 1em;
      padding: 0.5em;
      font-size: 0.8em;
    }

    & a {
      text-decoration: none;
      color: rgb(78, 159, 61);
      margin: 0.5em 1em;
      padding: 0.5em;
      font-size: 0.8em;
    }

    & img {
      object-fit: cover;
      margin: 0 1em;
      width: 90%;
      height: 5em;
    }

    & .Child1,
    .Child2,
    .Child3 {
      width: 90%;
    }

    .Child2 {
      margin-top: 2em;
      border-left: 1px solid rgb(78, 159, 61);
      border-right: 1px solid rgb(78, 159, 61);
      border-top: 1px solid rgb(78, 159, 61);
      background: linear-gradient(0deg, rgb(25, 26, 25), rgb(0, 0, 0));
    }

    & .ProjectContainer > * {
      min-width: 100%;
      min-height: 50vh;
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
              <h3>Film System</h3>
              <img src={megrey}></img>
              <p>
                The Film System is an application that enables the creation of a
                user and to list their favourite movies and genres for all to
                see.
              </p>
              <p>
                A Local SQL Server database was created to store user data. The
                web client was created by using the React library. An API was
                created with .NET framework with various essential tools to
                establish a connection between server and client.
              </p>
              <a href="https://github.com/lordstimpa/Film-System-Client">
                <FaGithub /> Web Client
              </a>
              <a href="https://github.com/lordstimpa/Film-System-Client">
                <FaGithub /> API
              </a>
            </div>

            <div className={project === 2 ? "active" : "inactive"}>
              <h3>Project 2</h3>
              <img src={megrey}></img>
              <a href="https://github.com/lordstimpa/Film-System-Client">
                <FaGithub /> Web Client
              </a>
            </div>

            <div className={project === 3 ? "active" : "inactive"}>
              <h3>Project 3</h3>
              <img src={megrey}></img>
              <a href="https://github.com/lordstimpa/Film-System-Client">
                <FaGithub /> Web Client
              </a>
            </div>

            <div className={project === 4 ? "active" : "inactive"}>
              <h3>Project 4</h3>
              <img src={megrey}></img>
              <a href="https://github.com/lordstimpa/Film-System-Client">
                <FaGithub /> Web Client
              </a>
            </div>

            <div className={project === 5 ? "active" : "inactive"}>
              <h3>Project 5</h3>
              <img src={megrey}></img>
              <a href="https://github.com/lordstimpa/Film-System-Client">
                <FaGithub /> Web Client
              </a>
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
