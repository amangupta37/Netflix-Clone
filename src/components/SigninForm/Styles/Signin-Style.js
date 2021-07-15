import styled from "styled-components";
export const WraperContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
`;
export const Container = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
  z-index: 1;

  span {
    color: #ffff;
    font-size: 2rem;
    font-weight: 700;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 35%;
    margin: 0 auto;
    height: 75vh;
    top: 15%;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 0.5rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  input {
    width: 100%;
    height: 50px;
    margin-top: 1rem;
    padding-left: 1rem;
    background: #333;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    color: #fff;
  }

  button {
    width: 100%;
    height: 50px;
    background: red;
    margin-top: 2rem;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    margin-top: 2rem;
    font-size: 1.2rem;

    color: rgb(179, 179, 179);
  }

  span {
    font-size: 1rem;
  }

  h5 {
    margin-top: 1rem;
    span {
      font-size: 0.8rem;
      color: #0071eb;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    padding: 2rem;
    margin-top: 0rem;
  }
`;
export const HelpContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;

  color: rgb(179, 179, 179);
  p {
    color: rgb(179, 179, 179);
    display: grid;
    grid-template-rows: 20px 1fr;
  }
`;
export const HoldhelpContainer = styled.div`
  margin-top: 1rem;
`;

export const CheckboxContainer = styled.div`
  width: 65%;
  display: flex;
  gap: 0.2rem;
  p {
    margin-top: 0.4rem;
    font-size: 0.8rem;
  }
`;
