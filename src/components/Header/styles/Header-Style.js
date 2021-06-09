import styled from "styled-components/macro";
import Bgimg from "../HeaderImg/Header.jpg";
export const Container = styled.div`
  width: 100%;
  height: 490px;
  border-bottom: 0.3rem solid #333;
`;

export const HeaderContainer = styled.div`
  width: 100%;

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
`;

export const EffectContainer = styled.div`
  width: 100%;
  height: 486px;
  position: absolute;
  background: #000;
  opacity: 0.7;
`;

export const TitleContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 5rem;
  z-index: 0;
  display: grid;
  place-items: center;
  // background: green;
  color: #ffff;
  span {
    font-size: 1.7rem;
    font-weight: 700;
    text-align: center;
  }
  p {
    padding-top: 1rem;
  }
`;

export const MailFormContainer = styled.div`
  width: 100%;
  padding: 0;
  // background: red;
  z-index: 1;
`;
