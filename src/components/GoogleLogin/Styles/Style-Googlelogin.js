import styled from "styled-components";

export const GoogleContainer = styled.div`
  width: 90%;
`;
export const IconContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 0.5rem;
  cursor: pointer;

  img {
    width: 18%;
  }
  span {
    padding-top: 0.9rem;
    color: rgb(179, 179, 179);
    font-size: 1rem;
  }
  span:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    span {
      padding-top: 1rem;
      font-size: 1rem;
    }
  }
`;
