import React from "react";
import {
  Container,
  HeaderContainer,
  TitleContainer,
  MailFormContainer,
  EffectContainer,
  HoldTitle,
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
          <HoldTitle>
            <h1>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
          </HoldTitle>
        </TitleContainer>
        <MailFormContainer>
          <Mailform />
        </MailFormContainer>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
