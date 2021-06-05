import styled from "styled-components/macro";

export const Jumbocontainer = styled.div`
  width: 100%;
  height: auto;
  background: #333333;
  color: #ffff;
  display: grid;
  // grid-template-column: 1fr 1fr 1fr;
  grid-row-gap: 0.3rem;

  @media only screen and (min-width: 1000px) {
    grid-template-column: 200px 1fr 1fr;
    grid-row-gap: 0.5rem;
  }
`;

export const Jumbosection = styled.div`
  width: 100%;
  height: 340px;
  background: #000;
  color: #ffff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media only screen and (min-width: 1000px) {
    display: flex;
  }
`;

export const Jumbotextsection = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  // background: red;
  text-align: center;
  margin-top: 2rem;

  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media only screen and (min-width: 1000px) {
    margin-left: 10rem;
    margin-top: 100px;
    margin-right: 5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 550;
      color: red;
    }
    p {
      font-size: 1.5rem;
      font-weigth: 10;
      margin-top: 1rem;
      text-align: left;
      width: 500px;
    }
  }
`;

export const Jumboimagesection = styled.div`
  width: 100%;
  height: auto;
  // background: green;
  display: grid;

  place-items: center;

  img {
    width: 65%;
    height: 180px;
  }

  // height: 200px;
  // margin-top: 100px;
  // background: green;
`;
