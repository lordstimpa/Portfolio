import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Body = styled.div`
  min-height: 10em;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-top: 1px solid rgb(30, 81, 40);

  & .Container a {
    font-size: 1.5em;
    color: rgb(78, 159, 61);
    margin: 0 1em;

    :hover {
      color: rgb(216, 233, 168);
    }
  }
`;

const Footer = () => {
  return (
    <Body>
      <div className="Container">
        <p>@2023 Steven Dalfall</p>
      </div>
      <div className="Container">
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
