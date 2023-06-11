import styled from "styled-components";
import { BsFillEnvelopeFill } from "react-icons/bs";

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

  & .EmailContainer {
    display: flex;
    margin-bottom: 2em;
    color: rgb(78, 159, 61);
    text-decoration: none;
    width: fit-content;

    & p {
      margin: 0;
    }

    & #EmailIcon {
      margin-top: 0.1em;
      margin-right: 0.5em;
    }
  }

  & .FormContainer {
    width: 90%;

    & form {
      display: flex;
      flex-direction: column;

      & label {
        margin-bottom: 0.4em;
        color: rgb(216, 233, 168);
      }

      & input,
      textarea {
        padding: 0.5em;
        color: rgb(78, 159, 61);
        background: rgba(30, 81, 40, 0.1);
        border: 1px solid rgb(78, 159, 61);
        font-family: "VT323", monospace;
        font-size: 1.1em;

        :focus {
          box-shadow: 0 0 25px 1px rgba(78, 159, 61, 0.5);
          outline: none !important;
        }
      }

      & input {
        margin-bottom: 1em;
      }

      & textarea {
        margin-bottom: 2em;
        resize: none;
      }

      & input[type="submit"] {
        :hover {
          background: rgb(78, 159, 61);
          color: rgb(25, 26, 25);
          cursor: pointer;
        }
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
          <a
            className="EmailContainer"
            href="mailto:steven.dalfall@live.se?subject=Mail from Steven's Portfolio."
          >
            <BsFillEnvelopeFill id="EmailIcon" />
            <p> steven.dalfall@live.se</p>
          </a>
        </div>
        <div className="FormContainer">
          <form>
            <label>Name</label>
            <input type="text" placeholder="John Wick"></input>

            <label>Email</label>
            <input type="text" placeholder="john.wick@continental.org"></input>

            <label>Message</label>
            <textarea
              name="message"
              rows="10"
              cols="30"
              placeholder="Yeaaah..."
            ></textarea>

            <input type="submit" value="Send"></input>
          </form>
        </div>
      </div>
    </Body>
  );
};

export default Contact;
