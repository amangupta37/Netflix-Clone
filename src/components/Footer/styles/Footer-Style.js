import styled from "styled-components/macro";

export const Footercontainer = styled.div`
  width: 100%;

  border-top: 0.3rem solid #333333;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 400px;
  }
`;
export const FooterQnASection = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  p {
    width: 100%;
    text-align: left;
    color: rgb(117, 117, 117);
    font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  @media only screen and (min-width: 800px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;

    p {
      font-size: 0.9rem;
      width: 100%;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 60%;
    margin: 0 auto;
    margin-top: 5rem;

    p {
      font-size: 1rem;
      width: 100%;
    }
  }
`;

export const FooterInfoSection = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 130px 120px;
  text-align: left;
  grid-gap: 1.2rem;

  p {
    font-size: 13px;
    color: rgb(117, 117, 117);
    font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 400;
  }

  p:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media only screen and (min-width: 500px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 1.3rem;

    grid-template-columns: repeat(3, 1fr);
    text-align: left;
    grid-gap: 1rem;

    p {
      font-size: 0.9rem;
      font-weight: 200;
    }
  }

  @media only screen and (min-width: 800px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 1.3rem;

    grid-template-columns: repeat(4, 1fr);
    text-align: left;
    grid-gap: 1rem;

    p {
      font-size: 0.9rem;
      font-weight: 200;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 60%;
    margin-top: 2rem;
    grid-template-columns: repeat(4, 1fr);
    p {
      font-size: 0.9rem;
      font-weight: 200;
    }
  }
`;

export const FooterChooseLanguageSection = styled.div`
  width: 80%;
  margin: 0 auto;

  margin-top: 3rem;
  height: 9rem;

  select {
    width: 120px;
    height: 60px;
    background: #000;
    color: rgb(117, 117, 117);
    padding: 0.3rem;
    font-size: 18px;
    font-weight: 600;
    border-radius: 0.2rem;
  }
  p {
    margin-top: 2rem;
  }

  @media only screen and (min-width: 800px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 1.3rem;
    height: 4.5rem;

    select {
      width: 120px;
      height: 50px;
      background: #000;
      color: rgb(117, 117, 117);
      padding: 0.7rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.2rem;
    }

    option {
      font-size: 1rem;
    }

    p {
      margin-top: 0.8rem;
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 60%;
    select {
      width: 120px;
      height: 50px;
      background: #000;
      color: rgb(117, 117, 117);
      padding: 0.7rem;
      font-size: 1rem;
      font-weight: 600;
      border-radius: 0.2rem;
    }

    option {
      font-size: 1rem;
    }
    p {
      margin-top: 1rem;
      font-size: 1rem;
      color: rgb(117, 117, 117);
    }
  }
`;
