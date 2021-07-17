import styled from "styled-components";

export const showContainer = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`;

export const VideoShowCase = styled.div`
  width: 100%;
  height: 230px;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 70%;
    margin: 0 auto;
    height: 450px;
  }
`;
