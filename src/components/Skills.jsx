import styled from "styled-components";

// Imported icons
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiDotnet,
  DiGit,
} from "react-icons/di";
import {
  SiCsharp,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiJson,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Body = styled.div`
  & .Parent {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .Child1 {
      width: 90%;
      margin-top: 4em;
    }

    & .Child2,
    .Child3 {
      width: 90%;
      margin-top: 2em;
    }

    & h2 {
      padding: 0 0.1em;
      margin: 0;
      font-size: 2em;
      text-align: center;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }

    & h3 {
      text-align: left;
      width: fit-content;
    }

    & h3, p {
      padding: 0 1em;
    }

    & li {
      padding: 0 1em 1em 0;
    }

    & a {
      color: rgb(78, 159, 61);
    }

    & .Child2 {
      border-bottom: 1px solid rgb(30, 81, 40);
      border-left: 1px solid rgb(30, 81, 40);
      background: linear-gradient(190deg, rgba(25, 26, 25, 0), rgb(0, 0, 0));
    }

    & .Child3 {
      border-top: 1px solid rgb(30, 81, 40);
      border-right: 1px solid rgb(30, 81, 40);
      background: linear-gradient(45deg, rgba(25, 26, 25, 0), rgb(0, 0, 0));

      & .Container1,
      .Container2,
      .Container3 {
        text-align: center;
        color: rgb(78, 159, 61);

        & .LogoContainer1,
        .LogoContainer2,
        .LogoContainer3 {
          display: flex;
          flex-wrap: wrap;
          padding: 0 0.5em 0.5em 0.5em;
          margin-left: 1em;

          & * {
            min-width: 70px;
            color: rgb(216, 233, 168);
            background: rgb(30, 81, 40);
            border: 1px solid rgb(216, 233, 168);
            padding: 0.5em;
            margin: 0.5em;
          }
        }
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

const Skills = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <h2>Skills</h2>
        </div>
        <div className="Child2">
        <p>
          I have acquired a wealth of knowledge in various programming languages, tools, and frameworks, which serve as my arsenal for developing diverse applications.
        </p>
        <p>
          Currently, I am studying full-stack .NET development at <a href="https://chasacademy.se/">Chas Academy</a>, where I am honing my skills and expanding my expertise.
        </p>
        <p>
          I have successfully completed various full-stack development projects that showcase my skills and experience. These include:
        </p>
        <ul>
          <li>
            A weather app where users can add and view their favorite cities, demonstrating my API integration and user interface design expertise.
          </li>
          <li>
            An individual project involving the creation of a film system, including a comprehensive database, API, and web client. This allowed me to showcase my skills in data modeling, backend development, and frontend design.
          </li>
          <li>
            A collaborative project with classmates focused on a console-based bank application. Together, we implemented key banking functionalities, enhancing my understanding of object-oriented programming and teamwork in a software development environment.
          </li>
        </ul>
        <p>
          Skills I have gathered thus far are shown below.
        </p>
        </div>
        <div className="Child3">
          <div className="Container1">
            <h3>Frontend</h3>
            <div className="LogoContainer1">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript</p>
              <p>React.js</p>
              <p>RESTful API's</p>
            </div>
          </div>
          <div className="Container2">
          <h3>Backend</h3>
            <div className="LogoContainer2">
              <p>C#</p>
              <p>.NET</p>
              <p>Entity Framework</p>
              <p>SQL</p>
              <p>SQL Server</p>
              <p>PostgreSQL</p>
            </div>
          </div>
          <div className="Container3">
          <h3>Other</h3>
            <div className="LogoContainer3">
              <p>Git / GitHub</p>
              <p>Agile / Scrum</p>
              <p>Test-Driven Development</p>
              <p>JSON</p>
              <p>XML</p>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Skills;
