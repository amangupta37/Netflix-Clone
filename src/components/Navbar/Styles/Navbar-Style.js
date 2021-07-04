import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  display: ${(prop) =>
    prop.toogleBackground || prop.initialPosition === 0 ? "block" : "none"};
`;
export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${(prop) => (prop.toogleBackground ? "rgb(0, 0, 0)" : null)};
`;
export const LogoContainer = styled.div`
  width: 130px;
  padding-top: 1rem;
  padding-left: 0.5rem;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  padding-top: 0.8rem;
  padding-right: 1rem;
  display: flex;
  justify-content: flex-end;

  img {
    width: 30px;
    height: 30px;
  }
`;
