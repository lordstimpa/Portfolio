import styled from "styled-components";
import { useState } from "react";

// Imported icons
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Imported imgs
import movies from "../assets/movies.jpg";
import bank from "../assets/bank.jpg";
import race from "../assets/race.jpg";
import dices from "../assets/dices.jpg";

const Body = styled.div`
  & .Parent {
    padding-bottom: 4em;
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

    & .Child1 {
      margin-top: 4em;
      width: 90%;
    }

    .Child2 {
      margin-top: 2em;
      width: 90%;
      border-left: 1px solid rgb(30, 81, 40);
      border-right: 1px solid rgb(30, 81, 40);
      border-top: 1px solid rgb(30, 81, 40);
      background: linear-gradient(0deg, rgba(25, 26, 25, 0), rgb(0, 0, 0));
    }

    & .ProjectContainer {
      & > * {
        min-width: 100%;
        min-height: 55vh;
      }

      .inactive {
        display: none;
      }

      & .imgContainer {
        margin: 0 1em;

        & img {
          object-fit: cover;
          width: 100%;
          height: 6em;
        }
      }

      & .Links {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;

        & a {
          text-decoration: none;
          color: rgb(78, 159, 61);
          font-size: 0.9em;
        }

        & :hover {
          color: rgb(216, 233, 168);
        }
      }
    }

    .Arrows {
      display: flex;
      justify-content: space-between;
      margin: 1em;
      font-size: 1.5em;
      color: rgb(78, 159, 61);

      & :hover {
        color: rgb(216, 233, 168);
        cursor: pointer;
      }

      & > * {
        padding: 0.2em;
        border: 1px solid rgb(78, 159, 61);
        border-radius: 5px;
      }
    }
  }

  @media only screen and (min-width: 800px) {
    .Parent {
      & .Child1,
      .Child2,
      .Child3 {
        width: 720px;
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
      setProject(4);
    }
  };

  const handleRightClick = () => {
    if (project < 4) {
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
              <div className="imgContainer">
                <img src={movies}></img>
              </div>
              <p>
                The Film System is an application that enables the creation of a
                user and to list their favourite movies and genres for all to
                see.
              </p>
              <p>
                A Local SQL Server database was designed and setup to store user
                data. The web client was created with the React library. An API
                for the Film System was developed with .NET framework with
                various essential tools to establish a connection between client
                and server.
              </p>
              <div className="Links">
                <a href="https://github.com/lordstimpa/Film-System-Client">
                  <FaGithub /> Web Client
                </a>
                <a href="https://github.com/lordstimpa/Film-System-API">
                  <FaGithub /> API
                </a>
                <a href="https://zippy-raindrop-359151.netlify.app/">
                  <FiExternalLink /> View now!
                </a>
              </div>
            </div>

            <div className={project === 2 ? "active" : "inactive"}>
              <h3>Bank Application</h3>
              <div className="imgContainer">
                <img src={bank}></img>
              </div>
              <p>
                Bank application developed in C# with .NET 6.0. The application
                was developed in a team to provide banking services such as
                account management, funds transfer, transaction history, etc and
                the user interface was designed to be intuitive and
                user-friendly.
              </p>
              <p>
                The project was managed within the Scrum framework which
                involved iterative development cycles, daily stand-up meetings,
                and regular sprint plannings and retrospectives to improve the
                product continuously.
              </p>
              <div className="Links">
                <a href="https://github.com/lordstimpa/group-project-bank-csharp">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            <div className={project === 3 ? "active" : "inactive"}>
              <h3>Race Simulator</h3>
              <div className="imgContainer">
                <img src={race}></img>
              </div>
              <p>
                The Race Simulator is a console application made for running a
                car race simulation. This was made mainly for gaining more
                knowledge about asynchronous programming.
              </p>
              <p>
                Different randomized scenarios can cause each car's
                functionality such as wear of tires which affects the speed. As
                a user you are able to view the current status of the ongoing
                race and get additional information once the car reaches the
                finish line.
              </p>
              <div className="Links">
                <a href="https://github.com/lordstimpa/Race-Simulation">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>

            <div className={project === 4 ? "active" : "inactive"}>
              <h3>Dice Game</h3>
              <div className="imgContainer">
                <img src={dices}></img>
              </div>
              <p>This Dice Game was developed with vanilla JavaScript.</p>
              <p>
                Each turn, a player repeatedly rolls a die until either a 1 is
                rolled or the player decides to HOLD. If the player rolls a 1,
                they score nothing and it becomes the next player's turn.
              </p>
              <p>
                If the player rolls any other number, it is added to their turn
                total and the player's turn continues. If a player chooses to
                HOLD, their turn total is added to their score. First to score
                100 wins.
              </p>
              <div className="Links">
                <a href="https://github.com/lordstimpa/Pig-Game">
                  <FaGithub /> GitHub
                </a>
                <a href="https://lordstimpa.github.io/Pig-Game/">
                  <FiExternalLink /> Play now!
                </a>
              </div>
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
