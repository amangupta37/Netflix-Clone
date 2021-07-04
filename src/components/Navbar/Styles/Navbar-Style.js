import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  z-index: 10000;
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
  gap: 1rem;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const SearchBarContainer = styled.div`
  width: 75%;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;

  #search {
    transform: scale(1.3);
    fill: #ffffff;

    margin-top: 0.3rem;
  }

  input {
    width: 85%;
    border: 1px solid #ffffff;
    outline: none;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.2rem;
    padding-left: 0.5rem;
    color: #ffffffff;
  }
`;
