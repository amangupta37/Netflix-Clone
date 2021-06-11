import React from "react";
import {
  Container,
  LogoContainer,
  FooterContainer,
  PlaceLogo,
} from "./styles/Theme-Style";
import { Netflixlogo } from "../Header/Logo/Netflixlogo";
import Footer from "../Footer/Footer";
const Theme = () => {
  return (
    <Container>
      <LogoContainer>
        <PlaceLogo>
          <Netflixlogo />
        </PlaceLogo>
      </LogoContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Theme;
