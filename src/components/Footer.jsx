import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Body = styled.div`
  min-height: 10em;
  padding: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-top: 1px solid rgb(30, 81, 40);

  & .NameContainer {
    padding-top: 1.6em;
    color: rgb(78, 159, 61);
  }

  & .LinkContainer {
    & a {
      font-size: 1.5em;
      color: rgb(216, 233, 168);
      margin: 0 0.5em;

      :hover {
        color: rgb(78, 159, 61);
      }
    }
  }

  & .SubLinkContainer {
    padding: 2em;
    border-bottom: 0.4em solid transparent;
    border-image: linear-gradient(
        to right,
        rgb(0, 0, 0),
        rgb(78, 159, 61),
        rgb(0, 0, 0)
      )
      1;

    & .Link {
      text-decoration: none;
      margin: 0 0.5em;
      font-size: 1.2em;
      color: rgb(216, 233, 168);

      :hover {
        color: rgb(78, 159, 61);
      }
    }
  }
`;

const Footer = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds a smooth scrolling effect
    });
    
  };

  return (
    <Body>
      <div className="SubLinkContainer">
        <Link to="/" className="Link" onClick={handleClick}>
          Home
        </Link>
        <Link to="/resume" className="Link" onClick={handleClick}>
          Resume
        </Link>
        <Link to="/contact" className="Link" onClick={handleClick}>
          Contact
        </Link>
      </div>
      <div className="NameContainer">
        <p>@2023 Steven Dalfall</p>
      </div>
      <div className="LinkContainer">
        <a
          href="https://www.linkedin.com/in/steven-dalfall-54223b131/"
          title="Add me on LinkedIn!"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/lordstimpa" title="View my GitHub!">
          <BsGithub />
        </a>
      </div>
    </Body>
  );
};

export default Footer;
