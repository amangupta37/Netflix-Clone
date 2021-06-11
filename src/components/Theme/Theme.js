import React from "react";
import {
  Container,
  LogoContainer,
  FooterContainer,
  PlaceLogo,
} from "./styles/Theme-Style";
import { Netflixlogo } from "../Header/Logo/Netflixlogo";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Theme = () => {
  return (
    <Container>
      <LogoContainer>
        <PlaceLogo>
          <Link to="/">
            <Netflixlogo />
          </Link>
        </PlaceLogo>
      </LogoContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Theme;
