import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding-top: 1rem;
  display: grid;
  grid-templates-rows: 1fr 1fr 1fr;
`;

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const TitleContainer = styled.div`
  width: 100%;
`;
export const CrossContainer = styled.div`
  width: 10%;
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
  h2 {
    text-align: center;
  }
`;

export const VideoBgContainer = styled.div`
  width: 100%;
`;

export const BgContainer = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
