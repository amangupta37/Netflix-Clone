import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  // background: red;
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
    border: 1px solid #333;
    cursor: pointer;
  }

  img:hover {
    border: 2px solid rgb(29, 161, 242);
  }
  span {
    color: #ffff;
    p {
      width: 100%;
      margin-top: 0.5rem;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    img {
      width: 100px;
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

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 40%;
    margin: 0 auto;
    // background: blue;
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
    cursor: pointer;
  }
`;
