import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Body = styled.div`
  & .Parent {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
  & .Child1 {
    width: 90%;
    margin-top: 4em;

    & h1 {
      font-size: 2em;
      padding: 0 0.1em;
      margin: 0;
      text-align: center;
      color: rgb(25, 26, 25);
      background-color: rgb(78, 159, 61);
    }
  }

  & .Child2 {
    width: 90%;
    min-height: 10em;
    margin-top: 2em;
    text-align: center;
    border-top: 1px solid rgb(30, 81, 40);
    border-left: 1px solid rgb(30, 81, 40);
    background: linear-gradient(-45deg, rgb(25, 26, 25), rgb(0, 0, 0));

    & p,
    a {
      margin: 1em;
      padding-bottom: 1em;
    }

    & a {
      padding: 0.5em;
      background-color: rgb(78, 159, 61);
      color: rgb(25, 26, 25);
      border-radius: 0.5em;

      :hover {
        cursor: pointer;
        background-color: rgb(216, 233, 168);
      }
    }
  }
`;

const NotFound = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <p>An error has occurred.</p>
          <h1>Page not found...</h1>
        </div>
        <div className="Child2">
          <p>Press to return to previous page...</p>
          <a onClick={handleClick}>Return</a>
        </div>
      </div>
    </Body>
  );
};

export default NotFound;
