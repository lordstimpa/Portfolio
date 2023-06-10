import styled from "styled-components";

const Body = styled.div`
  & .Parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }
  & .Child1 {
    width: 90%;
    margin-top: 5em;

    & h1 {
      font-size: 2em;
      padding: 0.5em;
      margin: 0;
      text-align: center;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }
  }
  & .Child2 {
    width: 90%;
    margin-top: 1em;
  }
  & .Grandchild {
    border: 2px solid rgb(30, 81, 40);
    padding: 1em;
    margin-top: 1em;
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
          <h2>Profile</h2>
            <div className="Grandchild">
              <p>
                I consider myself a flexible and goal-oriented person
                who understands that it is important to be adaptable.
                Good cooperation skills with colleagues are required to
                carry out work tasks effectively and sustainably. In
                addition, I strongly resist stress and find it easy to
                prioritize my work. This has developed from my time as
                an only employee at Niotek IT AB.
              </p>
            </div>
          </div>
          <div className="Child2">
          <h2>Professional Experience</h2>
          <div className="Grandchild">
            <h3>IT / Warehouse</h3>
            <h4>Niotek IT</h4>
            <p>09/2020 - 12/2021</p>
            <p>Smedjebacken, Sweden</p>
            <p>Duties:</p>
            <ul>
              <li>Administrate a trade management platform.</li>
              <li>Order, inventory, freight handling and sales.</li>
              <li>Examination of purchased products to determine condition.</li>
              <li>Troubleshooting, repair and software/hardware installation.</li>
              <li>Packing and dispatch of goods.</li>
            </ul>
          </div>
          <div className="Grandchild">
            <h3>Care Assistant</h3>
            <h4>Ludvika Municipality</h4>
            <p>04/2018 - 08/2019</p>
            <p>Ludvika, Sweden</p>
            <p>Duties:</p>
            <ul>
              <li>Help and support the residents with everything to improve their quality of life</li>
              <li>Handle inventory and financial matters.</li>
              <li>Administrate medicine.</li>
            </ul>
          </div>
          <div className="Grandchild">
            <h3>Fitter</h3>
            <h4>Trumslagarna</h4>
            <p>07/2016 - 08/2016</p>
            <p>Stockholm, Sweden</p>
            <p>Duties:</p>
            <ul>
              <li>Assembly and disassembly of ventilation frames.</li>
              <li>Use of sheet metal scissors and machine cutting.</li>
              <li>Maintain a good condition of machinery.</li>
              <li>Carefully examine purchase orders and complete them to the smallest detail.</li>
            </ul>
          </div>
        </div>
        <div className="Child2">
          <h2>Education</h2>
          <div className="Grandchild">
            <h3>Higher Vocational University</h3>
            <h4>Chas Academy</h4>
            <p>09/2022 - present</p>
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
          <div className="Grandchild">
            <h3>Komvux</h3>
            <h4>Västerbergslagens Utbildningsförbund Vux</h4>
            <p>01/2022 - 06/2022</p>
            <p>Ludvika, Sweden</p>
            <p>Syllabus:</p>
            <ul>
              <li>Programming 1</li>
              <li>Web development 1</li>
              <li>Computer technology 1</li>
              <li>Graphic illustration</li>
            </ul>
          </div>
          <div className="Grandchild">
            <h3>High School</h3>
            <h4>Västerbergslagens Utbildningsförbund</h4>
            <p>01/2016 - 06/2019</p>
            <p>Ludvika, Sweden</p>
            <p>Social science with a specialization in behavioral sceince.</p>
          </div>
        </div>
        <div className="Child2">
          <h2>Certificates</h2>
          <div className="Grandchild">
            <h3>Cambridge Advanced English Certificate</h3>
            <p>Issued: 04/2019</p>
            <p>Credential ID: 500/2598/3</p>
          </div>
        </div>
        <div className="Child2">
          <h2>Languages</h2>
          <div className="Grandchild">
            <h3>Swedish</h3>
          </div>
          <div className="Grandchild">
            <h3>English</h3>
          </div>
          <div className="Grandchild">
            <h3>Finnish</h3>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Resume;
