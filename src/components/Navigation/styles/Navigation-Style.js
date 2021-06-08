import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 1.8rem;
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-gap: 2rem;
`;

export const IconContainer = styled.div`
  opacity: 0.8;
  z-index: 1;
`;
export const SideContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  z-index: 1;
`;

export const LanguageContainer = styled.div`
  select {
    width: 90px;
    height: 1.6rem;
    background: #000;
    color: #fff;
    outline: none;
    padding-left: 0.2rem;
    border: 2px solid white;
  }
`;

export const SignupContainer = styled.div`
  button {
    width: 65px;
    height: 1.6rem;
    background: red;
    border: none;
    outline: none;
    color: #ffff;
    border-radius: 0.2rem;
    opacity: 1;
    font-weight: 500;
    font-size: 0.9rem;
  }
`;
