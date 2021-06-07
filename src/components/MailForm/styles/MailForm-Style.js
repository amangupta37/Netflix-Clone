import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  //   background: red;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2rem;
  color: #ffff;
  @media only screen and (min-width: 800px) {
    width: 43%;
    font-size: 0.7rem;
  }
`;

export const MailContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  //   background: red;
  margin-top: 0.8rem;

  input {
    width: 100%;
    height: 50px;
    outline: none;
    padding-left: 0.5rem;
    font-size: 1rem;
    padding-right: 0.5rem;
  }

  @media only screen and (min-width: 800px) {
    width: 45%;
    display: flex;
    input {
      height: 40px;
      font-size: 0.6rem;
    }
  }
`;
export const ButtonContainer = styled.div`
  width: 45%;
  padding-top: 1rem;
  //   background: yellow;
  margin: 0 auto;

  button {
    width: 100%;
    height: 40px;
    background: red;
    outline: none;
    border: none;
    border-radius: 0.2rem;
    color: #ffff;
    font-size: 1rem;
    font-weight: 500;
    display: grid;
    grid-template-columns: 1fr 10px;
    place-items: center;
  }
  @media only screen and (min-width: 800px) {
    padding-top: 0;

    button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const ArrowContainer = styled.div`
  //   background: yellow;
  margin-right: 1.6rem;
  margin-top: 0.2rem;
  @media only screen and (min-width: 800px) {
    margin-right: 1rem;
  }
`;
