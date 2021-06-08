import styled from "styled-components";
import Bgimg from "../HeaderImg/Header.jpg";
export const Container = styled.div`
  width: 100%;
  height: 495px;
  border-bottom: 0.5rem solid #333;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 490px;
  width: 100%;
  height: 490px;
  top: 0;
  bottom: 0;
  background: #000 url(${Bgimg});
  background-position: center;
  background-size: cover;
  box-shadow: -2px 90px 27px -27px rgba(0, 0, 0, 1) inset;
  display: grid;
  grid-template-rows: 30px 1fr 100px;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const MailFormContainer = styled.div`
  width: 100%;
`;

export const EffectContainer = styled.div`
  width: 100%;
  height: 490px;
  position: absolute;
  background: #000;
  opacity: 0.7;
`;
