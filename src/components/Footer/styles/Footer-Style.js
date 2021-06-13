import styled from "styled-components/macro";

export const Footercontainer = styled.div`
  width: 100%;

  border-top: 0.3rem solid #333333;
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
    width: 60%;
    margin: 0 auto;
    margin-top: 2rem;

    p {
      font-size: 8px;
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

  @media only screen and (min-width: 800px) {
    width: 60%;
    margin: 0 auto;
    margin-top: 1.3rem;

    grid-template-columns: 130px 130px 130px 130px;
    text-align: left;
    grid-gap: 1rem;

    p {
      font-size: 8px;
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
    width: 60%;
    margin: 0 auto;
    margin-top: 1.3rem;
    height: 4.5rem;

    select {
      width: 70px;
      height: 30px;
      font-size: 8px;
      padding: 0;
      padding-left: 0.5rem;
    }

    option {
      font-size: 10px;
    }

    p {
      margin-top: 0.8rem;
      font-size: 8px;
    }
  }
`;
