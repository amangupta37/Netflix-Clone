import styled from "styled-components/macro";

export const Jumbocontainer = styled.div`
  width: 100%;
  height: auto;
  background: #333333;
  color: #ffff;
  display: grid;
  grid-row-gap: 0.3rem;
  @media only screen and (min-width: 800px) {
    grid-template-column: 200px 1fr 1fr;
    grid-row-gap: 0.3rem;
  }
`;

export const Wrapjumbo = styled.div`
  width: 100%;
  height: 340px;
  background: #000;

  @media only screen and (min-width: 800px) {
    height: 280px;
  }
`;

export const Jumbosection = styled.div`
  width: 100%;

  color: #ffff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media only screen and (min-width: 800px) {
    width: 80%;
    // background: yellow;
    margin: 0 auto;
    height: 200px;
    flex-direction: ${(prop) => (prop.rowDirection ? "row" : "row-reverse")};
    height: 250px;
  }
`;

export const Jumbotextsection = styled.div`
  width: 90%;
  margin: 0 auto;
  height: auto;
  text-align: center;
  margin-top: 2rem;

  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  @media only screen and (min-width: 800px) {
    height: auto;
    text-align: left;
    padding-top: 2rem;

    padding-left: 2rem;
    // background: red;
    h1 {
      font-size: 1.8rem;
      font-weight: 550;
    }
    p {
      font-size: 1rem;
      margin-top: 1rem;
      text-align: left;
      width: 350px;
    }
  }
`;

export const Jumboimagesection = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;

  img {
    width: 65%;
    height: 180px;
  }
  @media only screen and (min-width: 800px) {
    width: 100%;

    // background: green;
    img {
      width: 290px;
      height: 200px;
    }
  }
`;

// style={jumboValue.id === 2 ? { width: "150px" } : {}}
