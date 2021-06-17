import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 340px;
  background: #000
    url("https://image.tmdb.org/t/p/original/${(prop) => prop.banner}");
  background-position: center;
  background-size: cover;
  box-shadow: 0px -90px 33px 0px rgba(0, 0, 0, 0.9) inset;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ShortdetailContainer = styled.div`
  width: 100%;
  margin-top: 10rem;
  height: 200px;

  color: #ffff;
  padding-left: 0.5rem;
  text-align: left;
  display: grid;
  grid-template-rows: auto 50px 1fr;
`;

export const TopicContainer = styled.div`
  width: 100%;
  //   background: red;
  font-size: 2rem;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  //   background: yellow;
  padding-top: 0.3rem;
  display: flex;
  gap: 1rem;
  button {
    width: 100px;
    height: 30px;
    background: rgba(0, 0, 0, 0.8);
    color: #ffff;
    border: none;
    outline: none;
    border-radius: 0.2rem;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 55px;
  overflow: hidden;

  // background: rgba(0, 0, 0, 0.8);
  p {
    width: 90%;
  }
`;
