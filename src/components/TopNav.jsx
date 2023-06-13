import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

// Imported icons
import { GiHamburgerMenu } from "react-icons/gi";

const Body = styled.div`
  position: fixed;
  min-width: 100vw;

  & .Links {
    position: fixed;
    right: 0;
    width: ${(props) => (props.linkWidth ? "100%" : "0")};
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgb(25, 26, 25), rgb(0, 0, 0));
    transition: 1s;

    & .Link {
      padding: 1.5em;
      text-align: left;
      color: rgb(78, 159, 61);
      text-decoration: none;
      transition: all 0.2s;

      :hover {
        cursor: pointer;
        background: rgb(78, 159, 61);
        color: rgb(25, 26, 25);
        transition: 0.2s;
      }
    }
  }

  & .burgerMenu {
    background: rgb(0, 0, 0);
    text-align: right;
    padding: 0.2em 1.5em;

    & :first-child {
      font-size: 3em;
      transition: 0.2s;
      color: rgb(78, 159, 61);

      :hover {
        cursor: pointer;
      }
    }
  }

  & .Name {
    position: absolute;

    & h2 {
      font-family: "Caveat", "Arial";
      font-size: 2em;
      margin: 0.23em;
      margin-left: 0.6em;
      padding-right: 1em;
      background: linear-gradient(rgb(78, 159, 61), rgb(216, 233, 168));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media only screen and (min-width: 800px) {
  }
`;

const TopNav = () => {
  const [linkWidth, setLinkWidth] = useState(false);

  const handleClick = () => {
    setLinkWidth(!linkWidth);
  };

  return (
    <Body linkWidth={linkWidth}>
      <div className="Name">
        <h2>Steven Dalfall</h2>
      </div>
      <div className="burgerMenu">
        <GiHamburgerMenu onClick={handleClick} />
      </div>
      <div className="Links">
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
    </Body>
  );
};

export default TopNav;
