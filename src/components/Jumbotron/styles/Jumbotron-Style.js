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

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
  }
`;

export const Wrapjumbo = styled.div`
  width: 100%;
  height: 400px;
  background: #000;

  @media only screen and (min-width: 800px) {
    height: 280px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 480px;
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
    margin: 0 auto;
    height: 200px;
    flex-direction: ${(prop) => (prop.rowDirection ? "row" : "row-reverse")};
    height: 250px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 100%;
    width: 80%;
    gap: 0rem;
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

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: auto;
    text-align: left;

    padding-top: 4.5rem;

    padding-left: 3rem;

    h1 {
      font-size: 3rem;
      font-weight: 550;
    }
    p {
      font-size: 1.5rem;
      margin-top: 1rem;
      text-align: left;
      width: 520px;
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
    img {
      width: 290px;
      height: 200px;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 100%;
    margin-top: 1rem;
    img {
      width: 490px;
      height: 380px;
    }
  }
`;

export const DownloadSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 200px 1fr;
  @media only screen and (min-width: 800px) and (max-width: 1150px) {
    width: 95%;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 90%;
    grid-template-rows: 350px 1fr;
  }
`;

export const ImageSection = styled.div`
  width: 45%;
  margin: 0 auto;
  display: grid;
  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 800px) {
    width: 50%;
  }
  @media only screen and (min-width: 1000px) {
    width: 45%;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 45%;
  }
`;

export const Jumbonotify = styled.div`
  width: 250px;
  height: 70px;
  margin: 0 auto;
  background: #000;
  position: relative;
  bottom: 3.5rem;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.75em;

  @media only screen and (min-width: 800px) {
    width: 200px;
    height: 58px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.45em;
    bottom: 4.5rem;
    background: #000;
    opacity: 0.99;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 300px;
    height: 90px;
    bottom: 8rem;
    border: 2px solid rgba(255, 255, 255, 0.25);
    border-radius: 0.8rem;
    bottom: 8rem;
    background: #000;
    opacity: 0.99;
  }
`;

export const Jumbonotifycontent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.6rem;
  display: flex;
  gap: 1rem;
  @media only screen and (min-width: 800px) and (max-width: 1100px) {
    padding: 0.3rem;
    padding-left: 0.5rem;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    padding: 0.5rem;
    padding-left: 1rem;
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

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 70px;
    height: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const Textboxshot = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  @media only screen and (min-width: 800px) {
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
  }
`;

export const Textarea = styled.div`
  width: 100%;
  margin-top: 0.5rem;

  h3 {
    font-size: 0.8rem;
    font-weight: 550;
    color: rgb(255, 255, 255);
  }

  p {
    font-size: 14px;
    color: rgb(0, 113, 235);
    margin-top: 0.2rem;
  }

  @media only screen and (min-width: 800px) {
    h3 {
      font-size: 0.6rem;
    }

    p {
      font-size: 8px;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    margin-top: 1rem;
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Iconarea = styled.div`
  width: 40%;
  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 800px) {
    padding-top: 0.4rem;
    img {
      width: 80%;
      height: 80%;
    }
  }

  @media only screen and (min-width: 800px) {
    padding-top: 0.7rem;
    img {
      width: 75%;
      height: 70%;
    }
  }
`;
