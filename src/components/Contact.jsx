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

    & h2 {
      font-size: 1.2em;
    }
  }

  & .FormContainer {
    width: 90%;

    & form {
      display: flex;
      flex-direction: column;

      & label {
        margin-bottom: 0.4em;
      }

      & input {
        margin-bottom: 2em;
        padding: 0.5em;
      }

      & textarea {
        margin-bottom: 2em;
      }

      & input[type="text"] {
      }
    }
  }
`;

const Contact = () => {
  return (
    <Body>
      <div className="Parent">
        <div className="Child1">
          <h1>Contact</h1>
        </div>
        <div className="Child2">
          <h2>Currently looking for an internship!</h2>
          <p>steven.dalfall@live.se</p>
        </div>
        <div className="FormContainer">
          <form>
            <label>Name</label>
            <input type="text"></input>

            <label>Email</label>
            <input type="text"></input>

            <label>Message</label>
            <textarea name="message" rows="10" cols="30"></textarea>

            <input type="submit"></input>
          </form>
        </div>
      </div>
    </Body>
  );
};

export default Contact;
