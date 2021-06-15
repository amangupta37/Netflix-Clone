import styled from "styled-components";

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
    span {
      font-size: 1rem;
      color: #ffff !important;
    }
  }

  h6 {
    padding-top: 1rem;
    font-size: 0.8rem;
    color: rgb(179, 179, 179);
    span {
      font-size: 0.8rem;
      color: #0071eb;
    }
  }
`;
