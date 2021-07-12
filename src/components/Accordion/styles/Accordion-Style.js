import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  @media only screen and (min-width: 800px) {
    width: 50%;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    width: 55%;
  }
`;

export const AccordionContainer = styled.div`
  width: 100%;
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
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    height: 70px;
    grid-template-columns: 1fr 80px;
  }
`;

export const AccordionContent = styled.div`
  margin-left: 1rem;
  padding-top: 0.8rem;

  font-size: 1.2rem;
  font-weight: 300;
  text-align: left;

  @media only screen and (min-width: 800px) {
    font-size: 0.9rem;
    font-weight: 100;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    font-size: 1.8rem;
    font-weight: 100;
    padding: 1.3rem;
  }
`;
export const AccordionAddIcon = styled.div`
  display: grid;
  place-items: center;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    #iconAdd {
      transform: scale(1.8);
    }
    #iconClear {
      transform: scale(1.8);
    }
  }
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

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    font-size: 1.8rem;
    padding: 2rem;
  }
`;
