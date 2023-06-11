import styled from "styled-components";
import { BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import imgaaa from "../assets/aaa.jpg";

const Body = styled.div`
  & .Parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  & .Child1 {
    width: 250px;
    height: 250px;
    margin-top: 5em;
    text-align: center;

    & img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      object-position: 74% 0;
      border-radius: 100%;
      border: 2px solid rgb(216, 233, 168);
    }
  }

  & .Child2 {
    width: 90%;

    & h1 {
      font-size: 3.2em;
      padding: 0.5em 0.1em;
      margin: 0;
      text-align: center;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }
  }

  & .Child3 {
    width: 90%;
    margin-top: 2em;
    border-top: 1px solid rgb(30, 81, 40);
    border-left: 1px solid rgb(30, 81, 40);
    background: linear-gradient(-45deg, rgb(25, 26, 25), rgb(0, 0, 0));

    & p {
      padding: 1em;
      margin: 0;
    }
  }

  & .Links {
    margin: 1em 0;
    display: flex;
    justify-content: space-around;
    & a {
      font-size: 2em;
      color: rgb(78, 159, 61);
      transition: transform 0.2s;

      :hover {
        color: rgb(216, 233, 168);
        transform: scale(1.3);
      }
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
          <img src={imgaaa}></img>
        </div>

        <div className="Child2">
          <a class="link1">
            <p>Full-stack .NET Developer</p>
            <h1>Steven Dalfall</h1>
          </a>
        </div>

        <div className="Child3">
          <p>I am a Full Stack .NET Developer based in Stockholm, Sweden.</p>
          <p>
            My short term goal is to gain an entry into the IT development
            industry. By having a good foundation of work experience I can
            continue working toward my long term goal. Which is to contribute to
            large projects and furher increase my knowledge about full-stack
            development.
          </p>
          <div className="Links">
            <a href="https://www.linkedin.com/in/steven-dalfall-54223b131/">
              <BsLinkedin />
            </a>
            <a href="https://github.com/lordstimpa">
              <BsGithub />
            </a>
            <a href="mailto:steven.dalfall@live.se?subject=Mail from Steven's Portfolio.">
              <BsFillEnvelopeFill />
            </a>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Hero;
