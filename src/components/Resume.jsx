import styled from "styled-components";
import { BsDownload } from "react-icons/bs";

const Body = styled.div`
  & .Parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  & h1 {
    font-size: 3.2em;
    padding: 0.5em;
    margin: 0;
    text-align: center;
    color: rgb(25, 26, 25);
    background-color: rgb(78, 159, 61);
  }

  & h2 {
    color: rgb(25, 26, 25);
    font-size: 2.5em;
    background-color: rgb(78, 159, 61);
    padding: 0.3em;
    width: 50%;
  }

  & h3 {
    color: rgb(78, 159, 61);
  }

  & .Child1 {
    width: 90%;
    margin-top: 5em;
  }

  & .Child2 {
    margin-top: 0.5em;
    width: 90%;

    & .Download {
      margin-left: auto;
      width: fit-content;
      margin-top: 1em;
      font-family: "Rajdhani", sans-serif;

      & a {
        border: 1px solid rgb(78, 159, 61);
        padding: 0.5em;
        transition: 0.2s;
        color: rgb(78, 159, 61);
        background: rgb(0, 0, 0);
        text-decoration: none;

        :hover {
          box-shadow: 0 0 25px 1px rgba(78, 159, 61, 0.5);
          background: rgb(78, 159, 61);
          color: rgb(25, 26, 25);
          cursor: pointer;
        }

        :focus {
          box-shadow: 0 0 25px 1px rgba(78, 159, 61, 0.5);
          background: rgb(78, 159, 61);
          color: rgb(25, 26, 25);
          outline: none !important;
        }
      }
    }
  }

  & .Child3 {
    width: 90%;
    margin-top: 3em;
  }

  & .Grandchild {
    display: flex;
    flex-direction: row;
    padding: 1em;

    & .DateCont {
      width: 30%;

      & .Date1 {
        color: rgb(78, 159, 61);
        width: fit-content;
        font-size: 1.1em;
        margin: 0;
      }
    }

    & .Description {
      width: 100%;
      padding: 0 1em;
      border-top: 1px solid rgb(30, 81, 40);
      border-left: 1px solid rgb(30, 81, 40);
      background: linear-gradient(-45deg, rgba(25, 26, 25, 0), rgb(0, 0, 0));

      & li {
        margin-bottom: 10px;
      }
    }
  }

  & .Lang {
    padding: 1em;
    display: flex;
    justify-content: space-between;

    & .LangItem {
      border-top: 1px solid rgb(30, 81, 40);
      border-left: 1px solid rgb(30, 81, 40);
      background: linear-gradient(-45deg, rgba(25, 26, 25, 0), rgb(0, 0, 0));
      text-align: center;
      padding: 0.5em;
      width: 25%;
    }
  }

  #LangContainer {
    padding-bottom: 4em;
  }

  @media only screen and (min-width: 850px) {
    .Child1,
    .Child2,
    .Child3 {
      width: 800px;
    }

    .Date2 {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    .DateCont {
      display: none;
      width: 0;
    }

    .Description {
      width: 100%;
    }

    h2 {
      width: fit-content;
    }

    .Grandchild {
      padding: 1em 0;
    }

    .Lang {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

const Resume = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <h1>Resume</h1>
        </div>
        <div className="Child2">
          <div className="Download">
            <a href="./assets/Steven_Dalfall_Resume.pdf" download>
              <BsDownload /> Download .pdf
            </a>
          </div>
        </div>
        <div className="Child3">
          <h2>Work Experience</h2>

          <div className="Grandchild">
            <div className="DateCont">
              <p className="Date1">12/2023 - 05/2024</p>
            </div>
            <div className="Description">
              <h3>Fullstack Developer Internship</h3>
              <h4>Samvima</h4>
              <p className="Date2">09/2020 - 12/2021</p>
              <p>Stockholm, Sweden</p>
              <p>Duties:</p>
              <ul>
                <li>
                  Collaborate with the development team to design, develop, and
                  maintain new and existing functionalities for the
                  "Förskoleappen".
                </li>
                <li>
                  Utilize Jira and agile methodologies to manage and prioritize
                  tasks, working through various tickets/stories on the project
                  board.
                </li>
                <li>
                  Contribute to version control using Git and GitHub, ensuring
                  code integrity and collaboration within the team.
                </li>
                <li>
                  Work with SQL Server, ASP.NET, .NET, JavaScript, Razor Pages,
                  MVC, C#, HTML, and CSS to implement backend and frontend
                  features.
                </li>
                <li>
                  Implement build automation and streamline development
                  workflows using Gulp.
                </li>
                <li>
                  Utilize Entity Framework for database interactions and data
                  modeling.
                </li>
                <li>
                  Engage in troubleshooting, debugging, and resolving technical
                  issues across the application stack.
                </li>
                <li>
                  Participate in code reviews, providing constructive feedback
                  and ensuring code quality standards are met.
                </li>
              </ul>
            </div>
          </div>

          <div className="Grandchild">
            <div className="DateCont">
              <p className="Date1">09/2020 - 12/2021</p>
            </div>
            <div className="Description">
              <h3>IT / Warehouse</h3>
              <h4>Niotek IT</h4>
              <p className="Date2">09/2020 - 12/2021</p>
              <p>Smedjebacken, Sweden</p>
              <p>Duties:</p>
              <ul>
                <li>Administrate a trade management platform.</li>
                <li>Order, inventory, freight handling and sales.</li>
                <li>
                  Examination of purchased products to determine condition.
                </li>
                <li>
                  Troubleshooting, repair and software/hardware installation.
                </li>
                <li>Packing and dispatch of goods.</li>
              </ul>
            </div>
          </div>

          <div className="Grandchild">
            <div className="DateCont">
              <p className="Date1">04/2018 - 08/2019</p>
            </div>
            <div className="Description">
              <h3>Care Assistant</h3>
              <h4>Ludvika Municipality</h4>
              <p className="Date2">04/2018 - 08/2019</p>
              <p>Ludvika, Sweden</p>
              <p>Duties:</p>
              <ul>
                <li>
                  Help and support the residents with everything to improve
                  their quality of life
                </li>
                <li>Handle inventory and financial matters.</li>
                <li>Administrate medicine.</li>
              </ul>
            </div>
          </div>

          <div className="Grandchild">
            <div className="DateCont">
              <p className="Date1">07/2016 - 08/2016</p>
            </div>
            <div className="Description">
              <h3>Fitter</h3>
              <h4>Trumslagarna</h4>
              <p className="Dat2">07/2016 - 08/2016</p>
              <p>Stockholm, Sweden</p>
              <p>Duties:</p>
              <ul>
                <li>Assembly and disassembly of ventilation frames.</li>
                <li>Use of sheet metal scissors and machine cutting.</li>
                <li>Maintain a good condition of machinery.</li>
                <li>
                  Carefully examine purchase orders and complete them to the
                  smallest detail.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="Child2">
          <h2>Education</h2>

          <div className="Grandchild">
            <div className="DateCont">
              <p className="Date1">09/2022 - present</p>
            </div>
            <div className="Description">
              <h3>Higher Vocational University</h3>
              <h4>Chas Academy</h4>
              <p className="Date2">09/2022 - present</p>
              <p>Stockholm, Sweden</p>
              <p>Syllabus:</p>
              <ul>
                <li>IT Tech and Operations</li>
                <li>Web technology</li>
                <li>Backend development and databases</li>
                <li>Frontend development and UX</li>
                <li>Programming methodology and testing</li>
                <li>Programming with C# and .NET</li>
                <li>Project methodology and agile methods</li>
                <li>Master thesis</li>
              </ul>
            </div>
          </div>

          <div className="Grandchild">
            <div className="DateCont">
              <p className="Date1">01/2022 - 06/2022</p>
            </div>
            <div className="Description">
              <h3>Komvux</h3>
              <h4>Västerbergslagens Utbildningsförbund Vux</h4>
              <p className="Date2">01/2022 - 06/2022</p>
              <p>Ludvika, Sweden</p>
              <p>Syllabus:</p>
              <ul>
                <li>Programming 1</li>
                <li>Web development 1</li>
                <li>Computer technology 1</li>
                <li>Graphic illustration</li>
              </ul>
            </div>
          </div>

          <div className="Grandchild">
            <div className="DateCont">
              <p className="Date1">01/2016 - 06/2019</p>
            </div>
            <div className="Description">
              <h3>High School</h3>
              <h4>Västerbergslagens Utbildningsförbund</h4>
              <p className="Date2">01/2016 - 06/2019</p>
              <p>Ludvika, Sweden</p>
              <p>Social science with a specialization in behavioral science.</p>
            </div>
          </div>
        </div>

        <div className="Child2">
          <h2>Certificates</h2>
          <div className="Grandchild">
            <div className="Description">
              <h3>Cambridge Advanced English Certificate</h3>
              <p>Issued: 04/2019</p>
              <p>Credential ID: 500/2598/3</p>
            </div>
          </div>
        </div>

        <div className="Child2" id="LangContainer">
          <h2>Languages</h2>
          <div className="Lang">
            <div className="LangItem">
              <h3>Swedish</h3>
            </div>
            <div className="LangItem">
              <h3>Finnish</h3>
            </div>
            <div className="LangItem">
              <h3>English</h3>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Resume;
