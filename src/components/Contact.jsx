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
    padding-bottom: 4em;
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
    margin: 2em 0;
    border-top: 1px solid rgb(30, 81, 40);
    border-left: 1px solid rgb(30, 81, 40);
    background: linear-gradient(-45deg, rgba(25, 26, 25, 0), rgb(0, 0, 0));

    & p {
      margin: 0;
    }

    & h2 {
      font-size: 1.2em;
      margin: 0;
      padding: 1rem;
    }

    & .InternInfo {
      padding: 0 1rem 1rem 1rem;
    }

    & .ExternalEmail {
      display: flex;
      color: rgb(78, 159, 61);
      text-decoration: none;
      width: fit-content;
      padding: 0 1rem 1rem 1rem;

      & #EmailIcon {
        margin-top: 0.1em;
        margin-right: 0.5em;
      }

      :hover {
        color: rgb(216, 233, 168);
      }
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
        padding: 1em;
        font-size: 1em;
        font-weight: 600;
        color: rgb(78, 159, 61);
        background: rgb(0, 0, 0);
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
        transition: 0.2s ease-in-out;
        :hover {
          box-shadow: 0 0 25px 1px rgba(78, 159, 61, 0.5);
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

  @media only screen and (min-width: 800px) {
    .Parent {
      .Child1,
      .Child2,
      .FormContainer {
        width: 720px;
      }
    }
  }
`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

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
            className="ExternalEmail"
            href="mailto:steven.dalfall@live.se?subject=Mail from Steven's Portfolio."
          >
            <BsFillEnvelopeFill id="EmailIcon" />
            <p> steven.dalfall@live.se</p>
          </a>
          <p className="InternInfo">
            As a student at Chas Academy we are to put our theoretical knowledge into practical work.
          </p>
          <p className="InternInfo">
            That is why I am on the lookout for a potential company where I can do my internship. The duration of the internship is approximately 5 months {"(11/12-2023 to 26/04-2024)."}  
          </p>
          <p className="InternInfo">
            Feel free to contact me regarding any questions or interest in what I have to offer as a full-stack developer.
          </p>
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
