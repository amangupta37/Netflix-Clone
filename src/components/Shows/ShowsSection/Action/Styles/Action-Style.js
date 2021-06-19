import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  display: grid;
  grid-template-rows: 35px auto;
`;
export const TitleContainer = styled.div`
  width: 100%;
  //   background: red;
  color: #fff;
  h2 {
    font-size: 1.2rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  //   background: blue;
  padding-left: 1rem;
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
`;

export const ActionContainer = styled.div`
  width: 100%;
  height: 100%;
  //   background: white;
  img {
    width: 200px;
    height: 130px;
  }
`;
