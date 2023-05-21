import styled from "styled-components";

const Body = styled.div`
  height: 100vh;
  & .Parent {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .Child1,
    .Child2,
    .Child3 {
      width: 90%;
    }
    & .Child1 h1 {
      width: 2.5em;
      padding: 0 0.1em;
      margin: 0;
      text-align: center;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }
    & .Child2 {
      margin-top: 2em;
      border-bottom: 1px solid rgb(78, 159, 61);
      border-left: 1px solid rgb(78, 159, 61);
      background: linear-gradient(190deg, rgb(25, 26, 25), rgb(0, 0, 0));
      & p {
        padding: 0 1em;
      }
    }
    & .Child3 {
      display: flex;
      margin-top: 2em;
      border-top: 1px solid rgb(78, 159, 61);
      border-right: 1px solid rgb(78, 159, 61);
      background: linear-gradient(190deg, rgb(25, 26, 25), rgb(0, 0, 0));
      & p {
        padding: 0 1em;
      }
    }
  }
`;

const Skills = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <h1>Skills</h1>
        </div>
        <div className="Child2">
          <p>
            Plentiful of knowledge has been gathered in a variety of different
            programming languages, tools and frameworks. All to be used as my
            instruments for developing diverse applications.
          </p>
        </div>
        <div className="Child3">
          <div>
            <p>Languages:</p>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <p>Frameworks / Libraries:</p>
            <ul>
              <li>.NET</li>
              <li>Entity Framework</li>
              <li>React</li>
              <li>PostgreSQL</li>
              <li>SQL Server</li>
            </ul>
          </div>
          <div>
            <p>Tools:</p>
            <ul>
              <li>Git / GitHub</li>
              <li>REST API</li>
              <li>JSON / XML</li>
              <li>ER- / EER- / UML Models</li>
            </ul>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Skills;
