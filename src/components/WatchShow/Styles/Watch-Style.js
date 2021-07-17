import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 1rem;
  display: grid;
  grid-templates-rows: 1fr 1fr 1fr;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    padding-left: 1rem;
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const TitleContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
export const CrossContainer = styled.div`
  width: 10%;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 8%;
    :hover {
      cursor: pointer;
    }
  }
`;
export const ButtonContainer = styled.div`
  width: 35%;
  height: 40px;
  margin-top: 3rem;
  margin-left: 0.3rem;
  background: red;
  padding-top: 0.4rem;
  position: absolute;
  opacity: 0.8;
  border-radius: 0.2rem;
  h2 {
    text-align: center;
  }
  z-index: 0;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 15%;
    :hover {
      cursor: pointer;
    }
  }
`;

export const VideoBgContainer = styled.div`
  width: 100%;
`;

export const BgContainer = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 1rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 100%;
    height: 400px;
  }
`;
