import React from "react";
import {
  Container,
  HeaderContainer,
  TitleContainer,
  MailFormContainer,
  EffectContainer,
} from "./styles/Header-Style";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <EffectContainer></EffectContainer>
        <Navigation />
        <TitleContainer></TitleContainer>
        <MailFormContainer></MailFormContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
