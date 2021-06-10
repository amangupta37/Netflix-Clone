import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 200px;
  // background: red;
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
  background: yellow;
  margin-top: 1rem;

  // display: grid;
  // grid-template-rows: 50px 50px 60px;

  display: flex;
  flex-direction: coloumn;
  input {
    width: 100%;
    height: 50px;
  }
`;
export const btnConatiner = styled.div`
  width: 100%;

  background: red;
`;
