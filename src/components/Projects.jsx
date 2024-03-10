import styled from "styled-components";
import { useState } from "react";

// Imported icons
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Imported imgs
import gamingassociation from "../assets/org.png";
import spag from "../assets/spag.png";
import movies from "../assets/filmsystem.png";
import weather from "../assets/weather.png";

const Body = styled.div`
  & .Parent {
    padding-bottom: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & h2 {
      padding: 0.3em;
      margin: 0;
      font-size: 2.5em;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }

    & h3 {
      margin: 1em;
      color: rgb(78, 159, 61);
    }

    & p {
      margin: 0.5em 0;
      padding: 0.5em;
    }

    & .Child1 {
      margin-top: 4em;
      width: 90%;
    }

    .Child2 {
      margin-top: 2em;
      width: 90%;
      border: 1px solid rgb(30, 81, 40);
      background: linear-gradient(0deg, rgba(25, 26, 25, 0), rgb(0, 0, 0));
      overflow-y: scroll;

      & .Project {
        border-bottom: 1px solid rgb(30, 81, 40);
        margin: 0 2rem;

        & .ProjectName {
          display: flex;
          justify-content: space-between;

          & h3 {
            margin: 2rem 0;
          }
        }

        & .ImgContainer {
          & img {
            object-fit: cover;
            width: 100%;
            height: 400px;
          }
        }

        & .LogoContainer {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 2rem;

          & * {
            text-align: center;
            min-width: 70px;
            color: rgb(216, 233, 168);
            background: rgb(30, 81, 40);
            border: 1px solid rgb(216, 233, 168);
            border-radius: 5px;
            padding: 0.5em;
            margin: 0.5em;
          }
        }

        & .LinksContainer {
          & .Links {
            display: flex;
            justify-content: flex-end;
            height: 100%;

            & a {
              width: fit-content;
              text-decoration: none;
              color: rgb(78, 159, 61);
              margin: 0.5em;
            }

            & :hover {
              color: rgb(216, 233, 168);
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 850px) {
    .Parent {
      & .Child1,
      .Child2,
      .Child3 {
        width: 800px;
      }
    }

    .Child2 {
      max-height: 1000px;
    }
  }
`;

const Projects = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <h2>Projects</h2>
        </div>

        <div className="Child2">
          <div className="Project">
            <div className="ProjectName">
              <h3>Gaming Association Website</h3>
            </div>
            <div className="ImgContainer">
              <img src={gamingassociation}></img>
            </div>
            <div className="LinksContainer">
              <div className="Links">
                <a
                  href="https://github.com/lordstimpa/Film-System-API"
                  title="View source code!"
                >
                  <FaGithub /> Github
                </a>
                <a
                  href="https://zippy-raindrop-359151.netlify.app/"
                  title="View website!"
                >
                  <FiExternalLink /> Website
                </a>
              </div>
            </div>
            <p>
              As a fullstack .NET developer, I spearheaded the creation of a
              website for a gaming association which I am a board member of. I
              did this by employing .NET Core Web API hosted on Azure, with
              Azure Key Vault for secure storage.
            </p>
            <p>
              Leveraging React for the frontend, I integrated C#, JavaScript,
              CSS, and HTML to deliver a cohesive user experience.
            </p>
            <div className="LogoContainer">
              <p>React.js</p>
              <p>RESTful API's</p>
              <p>C#</p>
              <p>.NET</p>
              <p>Azure</p>
            </div>
          </div>

          <div className="Project">
            <div className="ProjectName">
              <h3>Single Page Application</h3>
            </div>
            <div className="ImgContainer">
              <img src={spag}></img>
            </div>
            <div className="LinksContainer">
              <div className="Links">
                <a
                  href="https://github.com/lordstimpa/SPA-Game-Project"
                  title="View source code!"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
            <p>
              This project was made using ASP.NET Core with React and Identity
              authentication. We were also using SignalR for real-time updates
              in various functionality such as our global chat and in our game
              logic.
            </p>
            <p>
              As a user, you are able to register an account and chat with all
              of the users in our global chat while playing "Hangman" which is a
              word-guessing game.
            </p>
            <p>
              Each user that performs well will be displayed on the global top
              10 leaderboard which is viewable on the homepage. You are also
              able to see more personal stats in your personal profile.
            </p>
            <div className="LogoContainer">
              <p>React.js</p>
              <p>RESTful API's</p>
              <p>C#</p>
              <p>.NET</p>
              <p>ASP.NET</p>
              <p>MVC</p>
              <p>SQL Server</p>
              <p>Entity Framework</p>
            </div>
          </div>

          <div className="Project">
            <div className="ProjectName">
              <h3>Movierating App</h3>
            </div>
            <div className="ImgContainer">
              <img src={movies}></img>
            </div>
            <div className="LinksContainer">
              <div className="Links">
                <a
                  href="https://github.com/lordstimpa/Film-System-Client"
                  title="View source code!"
                >
                  <FaGithub /> Web Client
                </a>
                <a
                  href="https://github.com/lordstimpa/Film-System-API"
                  title="View source code!"
                >
                  <FaGithub /> API
                </a>
                <a
                  href="https://zippy-raindrop-359151.netlify.app/"
                  title="View website!"
                >
                  <FiExternalLink /> View now!
                </a>
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
            </div>
            <div className="LogoContainer">
              <p>React.js</p>
              <p>RESTful API's</p>
              <p>C#</p>
              <p>.NET</p>
              <p>ASP.NET</p>
              <p>MVC</p>
              <p>SQL Server</p>
              <p>Entity Framework</p>
            </div>
          </div>

          <div className="Project">
            <div className="ProjectName">
              <h3>Weather App</h3>
            </div>
            <div className="ImgContainer">
              <img src={weather}></img>
            </div>
            <div className="LinksContainer">
              <div className="Links">
                <a
                  href="https://github.com/lordstimpa/TDD-Team-Project"
                  title="View source code!"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
            <p>
              The weather API provides basic weather information to the client,
              such as current temperature, humidity, and weather conditions,
              while the React client interacts with the API to present the data
              in a user-friendly interface.
            </p>
            <p>
              This Weather App is a web application that consists of a weather
              ASP.NET Minimal API and a React client. The main goals of the
              project were to plan and execute software tests with a focus on
              unit tests, applying test-driven development practices and
              utilizing advanced Git version control, including the
              implementation of a CI/CD pipeline. The team worked in an agile
              manner, following the Scrum methodology.
            </p>
            <div className="LogoContainer">
              <p>React.js</p>
              <p>RESTful API's</p>
              <p>C#</p>
              <p>.NET</p>
              <p>ASP.NET</p>
              <p>SQL Server</p>
              <p>Entity Framework</p>
              <p>Linux</p>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Projects;
