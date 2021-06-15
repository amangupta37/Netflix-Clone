import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  //   background: red;
`;

export const PlanConatiner = styled.div`
  width: 100%;
  //   background: green;
`;
export const PlanBarConatiner = styled.div`
  width: 100%;
  height: 3rem;
  //   background: yellow;
  margin-top: 1rem;
  display: flex;
`;
export const PlanNameConatiner = styled.div`
  width: 50%;
  height: 100%;
  background: #000;
  text-align: left;
  h2 {
    font-size: 0.9rem;
    color: #ffff;
  }
  p {
    margin-top: 0.2rem;
    color: #ffff;
    text-align: left;
  }
`;
export const SubscribeConatiner = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: row-reverse;

  button {
    width: 80%;
    background: red;
    color: #ffff;
    border: none;
    outline: none;
    font-size: 1rem;
    border-radius: 0.2rem;
  }
`;
