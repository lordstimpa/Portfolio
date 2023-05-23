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

    & p {
      padding: 0 1em;
    }

    & .Child2 {
      border-bottom: 1px solid rgb(30, 81, 40);
      border-left: 1px solid rgb(30, 81, 40);
      background: linear-gradient(190deg, rgb(25, 26, 25), rgb(0, 0, 0));
    }

    & .Child3 {
      border-top: 1px solid rgb(30, 81, 40);
      border-right: 1px solid rgb(30, 81, 40);
      background: linear-gradient(45deg, rgb(25, 26, 25), rgb(0, 0, 0));

      & .Container1,
      .Container2,
      .Container3 {
        text-align: center;
        color: rgb(78, 159, 61);

        & .LogoContainer1,
        .LogoContainer2,
        .LogoContainer3 {
          display: flex;
          justify-content: space-around;
          padding: 0 0.5em 0.5em 0.5em;
          font-size: 2em;

          & * {
            color: rgb(216, 233, 168);
          }
        }
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
            Plentiful of knowledge has been gathered in a variety of different
            programming languages, tools and frameworks. All to be used as my
            instruments for developing diverse applications.
          </p>
        </div>
        <div className="Child3">
          <div className="Container1">
            <p>Languages</p>
            <div className="LogoContainer1">
              <DiHtml5 />
              <DiCss3 />
              <DiJavascript1 />
              <SiCsharp />
              <TbSql />
            </div>
          </div>
          <div className="Container2">
            <p>Frameworks / Libraries</p>
            <div className="LogoContainer2">
              <DiReact />
              <DiDotnet />
            </div>
          </div>
          <div className="Container3">
            <p>Other</p>
            <div className="LogoContainer3">
              <SiJson />
              <DiGit />
              <SiMicrosoftsqlserver />
              <SiPostgresql />
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Skills;
