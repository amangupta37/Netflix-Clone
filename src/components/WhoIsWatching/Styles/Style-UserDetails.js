import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  //   background: red;
`;

export const UserContainer = styled.div`
  width: 100;
  //   background: green;
  text-align: left;
  display: grid;
  place-items: center;
  grid-template-rows: 200px 1fr;
  grid-gap: 2rem;
`;

export const UserImageContainer = styled.div`
  width: 35%;
  text-align: center;

  img {
    width: 100%;
    border-radius: 0.3rem;
    border: 2px solid #333;
  }
  span {
    color: #ffff;
    p {
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`;
export const PlansContainer = styled.div`
  width: 100%;
  //   background: blue;
  text-align: left;
  h1 {
    font-size: 1.4rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #333;
  }
`;

export const SignoutContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 2rem;
  margin-bottom: 3rem;

  button {
    width: 100%;
    height: 100%;
    background: red;
    border: none;
    outline: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0.2rem;
  }
`;
