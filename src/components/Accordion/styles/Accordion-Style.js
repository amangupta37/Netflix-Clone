import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  @media only screen and (min-width: 800px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const AccordionContainer = styled.div`
  width: 100%;
  //   background: red;
`;

export const AccordionBar = styled.div`
  width: 100%;
  height: 50px;
  background: #303030;
  color: #fff;
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 40px;
  cursor: pointer;

  @media only screen and (min-width: 800px) {
    height: 40px;
  }
`;

export const AccordionContent = styled.div`
  margin-left: 1rem;
  padding-top: 0.8rem;
  // background: red;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: left;

  @media only screen and (min-width: 800px) {
    font-size: 0.9rem;
    font-weight: 100;
  }
`;
export const AccordionAddIcon = styled.div`
  display: grid;
  // background: yellow;
  place-items: center;
`;

export const AnswerSection = styled.div`
  width: 100%;
  padding: 1rem;
  height: auto;
  background: #303030;
  color: #fff;
  margin-top: 0.1rem;
  font-size: 18px;
  text-align: left;

  @media only screen and (min-width: 800px) {
    font-size: 15px;
  }
`;
