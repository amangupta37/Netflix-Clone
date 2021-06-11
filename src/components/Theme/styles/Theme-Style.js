import styled from "styled-components";
import Bgimg from "../../Header/HeaderImg/Header.jpg";

export const Container = styled.div`
  width: 100%;
  z-index: -1;
  display: grid;
  grid-template-rows: 550px 1fr;

  @media only screen and (min-width: 800px) {
    background: #000 url(${Bgimg});
    background-position: center;
    background-size: cover;
    box-shadow: -2px 90px 27px -27px rgba(0, 0, 0, 1) inset;
  }
`;
export const EffectContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  background: #000;
  opacity: 0.8;
`;

export const LogoContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  z-index: 1;
`;

export const PlaceLogo = styled.div`
  width: 25%;
  height: 50px;
  margin: 1rem;
  // background: blue;
`;

export const FooterContainer = styled.div`
  width: 100%;
  background: #000;
  z-index: 1;
`;
