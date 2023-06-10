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
`;

const Contact = () => {
  return (
    <Body>
    <div className="Parent">
      <div className="Child1">
        <h1>Contact</h1>
      </div>
      <div className="Child2"></div>
    </div>
  </Body>
  );
};

export default Contact;
