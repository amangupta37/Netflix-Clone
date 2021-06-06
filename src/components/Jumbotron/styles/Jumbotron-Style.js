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
  height: 400px;
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
    margin-top: 1rem;

    // background: green;
    img {
      width: 290px;
      height: 200px;
    }
  }
`;

export const Jumbonotify = styled.div`
  width: 250px;
  height: 70px;
  background: #000;
  margin-bottom: 20rem;
  position: relative;
  bottom: 3.5rem;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.75em;

  @media only screen and (min-width: 800px) {
    width: 200px;
    height: 58px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.45em;
    bottom: 2rem;
  }
`;

export const Jumbonotifycontent = styled.div`
  width: 100%;
  height: 100%;
  // background: red;
  padding: 0.6rem;
  display: flex;
  gap: 1rem;
  @media only screen and (min-width: 800px) {
    padding: 0.3rem;
    padding-left: 0.5rem;
  }
`;
export const Imageboxshot = styled.div`
  width: 40px;
  height: 3rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 800px) {
  }
`;
export const Textboxshot = styled.div`
  width: 100%;
  // background: red;
  display: flex;
  gap: 1.8rem;
  @media only screen and (min-width: 800px) {
    gap: 1.9rem;
  }
`;

export const Textarea = styled.div`
  margin-top: 0.5rem;

  h3 {
    font-size: 15px;
    font-weight: 550;
    color: rgb(255, 255, 255);
  }

  p {
    font-size: 14.4px;
    font-weight: 400;
    color: rgb(0, 113, 235);
    margin-top: 0.2rem;
  }

  @media only screen and (min-width: 800px) {
    h3 {
      font-size: 10px;
    }

    p {
      font-size: 8px;
    }
  }
`;

export const Iconarea = styled.div`
  padding-top: 0.8rem;
  @media only screen and (min-width: 800px) {
    padding-top: 0.6rem;

    transform: scale(0.8);
  }
`;
