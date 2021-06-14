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
    color: #333;
    font-size: 1rem;
  }
  span:hover {
    text-decoration: underline;
  }
`;
