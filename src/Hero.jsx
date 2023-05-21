import styled from "styled-components";

const Body = styled.div`
  height: 100vh;
  border-bottom: 1px solid white;
  & .Parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    & :nth-child(3) a {
      margin: 0 1em;
      transition: 0.2s ease-in-out;
      :hover {
        cursor: pointer;
        color: rgb(78, 159, 61);
      }
    }
  }
  & .Child1 {
    width: 90%;
    margin-top: 2em;
    & h1 {
      width: 6.1em;
      font-size: 3.2em;
      padding: 0 0.1em;
      margin: 0;
      text-align: center;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }
  }
  & .Child2 {
    width: 90%;
    margin-top: 2em;
    border-left: 1px solid rgb(78, 159, 61);
    background: linear-gradient(260deg, rgb(25, 26, 25), rgb(0, 0, 0));
    & p {
      padding: 1em;
      margin: 0;
    }
  }
  // Blend in on page reload
  @keyframes blendIn {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Hero = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <a class="link1">
            <p>Full Stack .NET Developer</p>
            <h1>Steven Dalfall</h1>
          </a>
        </div>

        <div className="Child2">
          <p>I am a Full Stack .NET Developer based in Stockholm, Sweden.</p>
          <p>
            My short term goal is to gain an entry into the IT development
            industry. By having a good foundation of work experience I can
            continue working toward my long term goal. Which is to contribute to
            large projects and furher increase my knowledge about full-stack
            development.
          </p>
        </div>
      </div>
    </Body>
  );
};

export default Hero;
