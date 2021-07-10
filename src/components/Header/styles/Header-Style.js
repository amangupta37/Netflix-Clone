import styled from "styled-components/macro";
import Bgimg from "../HeaderImg/Header.jpg";
export const Container = styled.div`
  width: 100%;
  height: 490px;
  border-bottom: 0.3rem solid #333;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 766px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 486px;
  top: 0;
  bottom: 0;
  background: #000 url(${Bgimg});
  background-position: center;
  background-size: cover;
  box-shadow: -2px 90px 27px -27px rgba(0, 0, 0, 1) inset;
  display: grid;
  grid-template-rows: 30px 1fr 250px;
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 100%;
    grid-template-rows: 0px 1fr 250px;
  }
`;

export const EffectContainer = styled.div`
  width: 100%;
  height: 486px;
  position: absolute;
  background: #000;
  opacity: 0.7;
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 5rem;
  z-index: 0;
  display: grid;
  place-items: center;
  color: #ffff;
`;

export const HoldTitle = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  padding: 0;

  h1 {
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;
  }
  p {
    padding-top: 1rem;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    margin-top: 5rem;
    grid-gap: 0;
    h1 {
      width: 60%;
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
    }
    p {
      font-size: 1.8rem;
      padding-top: 0;
    }
  }
`;

export const MailFormContainer = styled.div`
  width: 100%;
  padding: 0;
  z-index: 1;
`;
