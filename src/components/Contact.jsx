import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai";

const {
  VITE_REACT_APP_SERVICE_ID,
  VITE_REACT_APP_TEMPLATE_ID,
  VITE_REACT_APP_PUBLIC_KEY,
} = import.meta.env;

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
    margin-top: 1em;
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

      & .error {
        color: rgb(156, 32, 32);
      }

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
        font-family: "Rajdhani", sans-serif;

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
        transition: transform 0.2s ease-in-out;
        :hover {
          background: rgb(78, 159, 61);
          color: rgb(25, 26, 25);
          cursor: pointer;
        }
        :active {
          transform: scale(0.95);
        }
      }
    }
  }
`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = e.target.email_from;
    const isValidEmail = emailInput.checkValidity();

    if (!isValidEmail) {
      console.log("Invalid email");
      emailInput.classList.add("error");
      return;
    }

    setTimeout(() => {
      emailjs
        .sendForm(
          VITE_REACT_APP_SERVICE_ID,
          VITE_REACT_APP_TEMPLATE_ID,
          e.target,
          VITE_REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSent(true);
          },
          (error) => {
            console.log(error.text);
            setIsSent(false);
          }
        )
        .finally(() => {
          setIsLoading(false);
          emailInput.classList.remove("error");
          e.target.reset();
        });
    }, 1500);
  };

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
          <form onSubmit={sendEmail}>
            <label htmlFor="name_from">Name</label>
            <input
              type="text"
              name="name_from"
              placeholder="John Wick"
              required
            ></input>

            <label htmlFor="email_from">Email</label>
            <input
              type="email"
              name="email_from"
              placeholder="john.wick@continental.org"
              required
            ></input>

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="10"
              cols="30"
              placeholder="Yeaaah..."
              required
            ></textarea>

            <input
              type="submit"
              value={
                isLoading ? "Sending..." : isSent ? "Message sent!" : "Send"
              }
              disabled={isLoading || isSent}
            ></input>
          </form>
        </div>
      </div>
    </Body>
  );
};

export default Contact;
