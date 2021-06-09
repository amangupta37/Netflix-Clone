import React from "react";
import {
  Container,
  HeaderContainer,
  TitleContainer,
  MailFormContainer,
  EffectContainer,
} from "./styles/Header-Style";
import Navigation from "../Navigation/Navigation";
import Mailform from "../MailForm/Mailform";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <EffectContainer></EffectContainer>
        <Navigation />
        <TitleContainer>
          <span>Unlimited movies, TV shows and more.</span>
          <p>Watch anywhere. Cancel anytime.</p>
        </TitleContainer>
        <MailFormContainer>
          <Mailform />
        </MailFormContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
