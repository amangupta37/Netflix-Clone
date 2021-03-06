import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const PlanConatiner = styled.div`
  width: 100%;
`;
export const PlanBarConatiner = styled.div`
  width: 100%;
  height: 3rem;
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
  width: 120px;
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
    cursor: pointer;
  }
  #btn {
    font-size: 0.9rem;
    background: #333333;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    padding-left: 2rem;
    width: 200px;
  }
`;
