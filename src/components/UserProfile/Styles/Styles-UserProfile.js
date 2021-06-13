import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr;
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;
export const HeaderLogoContainer = styled.div`
  width: 30%;
  padding-left: 1rem;
  padding-top: 1rem;
`;

export const UserInfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  //   background: orange;
  text-align: left;

  h1 {
    font-size: 2rem;
    color: #ffff;
    font-weight: 700;
  }
`;
