import styled from "styled-components";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Body = styled.div`
  position: fixed;
  min-width: 100vw;
  & .Links {
    position: fixed;
    right: 0;
    width: ${(props) => (props.linkWidth ? "100vw" : "0")};
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(78, 159, 61);
    background: linear-gradient(180deg, rgb(25, 26, 25), rgb(0, 0, 0));
    transition: 1s;
    & a {
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
`;

const TopNav = () => {
  const [linkWidth, setLinkWidth] = useState(false);

  const handleClick = () => {
    setLinkWidth(!linkWidth);
  };

  return (
    <Body linkWidth={linkWidth}>
      <div className="burgerMenu">
        <GiHamburgerMenu onClick={handleClick} />
      </div>
      <div className="Links">
        <a class="link1">Home</a>
        <a class="link2" id="aboutTopLink">
          Skills
        </a>
        <a class="link3" id="projectsTopLink">
          Projects
        </a>
      </div>
    </Body>
  );
};

export default TopNav;
