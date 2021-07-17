import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 340px;
  background: #000
    url("https://image.tmdb.org/t/p/original/${(prop) => prop.banner}");
  background-position: center;
  background-size: cover;
  box-shadow: 0px -40px 33px 0px rgba(0, 0, 0, 0.9) inset;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 550px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    place-items: start;
    padding-top: 6rem;
    padding-left: 1rem;
  }
`;

export const ShortdetailContainer = styled.div`
  width: 100%;
  margin-top: 7rem;
  height: 200px;

  color: #ffff;
  padding-left: 0.5rem;
  text-align: left;
  display: grid;
  grid-template-rows: auto 50px 1fr;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 50%;
    grid-template-rows: auto 50px 1fr;
    grid-row-gap: 1rem;
  }
`;

export const TopicContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding-top: 0.3rem;
  display: flex;
  gap: 1rem;
  button {
    width: 100px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    color: #ffff;
    border: none;
    outline: none;
    border-radius: 0.2rem;
  }

  button:hover {
    background: #ffff;
    color: #000;
    cursor: pointer;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    button {
      height: 40px;
      font-size: 1.2rem;
      font-weught: 800;
    }
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
