import styled from "styled-components";

export const Faqcontainer = styled.div`
  width: 100%;

  border-top: 0.3rem solid #333333;

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    display: grid;
    grid-row-gap: 2.5rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 0.8rem;
  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    font-size: 1.5rem;
  }
`;
