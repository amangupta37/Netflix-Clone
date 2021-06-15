import styled from "styled-components";
import joker from "./Background/joker1.jpg";
export const Container = styled.div`
  width: 100%;
  height: 280px;
  background: #000 url(${joker});
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const ShortdetailContainer = styled.div`
  width: 100%;
  margin-top: 8rem;
  height: 190px;

  color: #ffff;
  padding-left: 0.5rem;
  text-align: left;
  display: grid;
  grid-template-rows: 40px 40px 1fr;
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
  // background: rgba(0, 0, 0, 0.8);
  p {
    width: 90%;
  }
`;
