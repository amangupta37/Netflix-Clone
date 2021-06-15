import React from "react";
import {
  Container,
  NavContainer,
  LogoContainer,
  ProfileContainer,
} from "./Styles/Navbar-Style";

import { Netflixlogo } from "../Header/Logo/Netflixlogo";

import user from "../WhoIsWatching/Styles/UserProfile/user.png";

const Navbar = () => {
  return (
    <Container>
      <NavContainer>
        <LogoContainer>
          <Netflixlogo />
        </LogoContainer>
        <ProfileContainer>
          <img src={user} alt="profile" />
        </ProfileContainer>
      </NavContainer>
    </Container>
  );
};

export default Navbar;
