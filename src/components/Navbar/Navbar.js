import React, { useState, useEffect } from "react";
import {
  Container,
  NavContainer,
  LogoContainer,
  ProfileContainer,
} from "./Styles/Navbar-Style";

import { Netflixlogo } from "../Header/Logo/Netflixlogo";

import user from "../WhoIsWatching/Styles/UserProfile/user.png";

const Navbar = () => {
  const [initialPosition, setInitialPosition] = useState(0);

  const [navBackground, setnavBackground] = useState(false);

  useEffect(() => {
    const Scroll = () => {
      let currentPosition = window.pageYOffset;

      if (currentPosition > initialPosition) {
        setnavBackground(true);
      } else {
        setnavBackground(false);
      }
      setInitialPosition(currentPosition < 0 ? 0 : currentPosition);
    };

    window.addEventListener("scroll", Scroll);
  }, [initialPosition, navBackground]);

  return (
    <Container toogleBackground={navBackground}>
      <NavContainer toogleBackground={navBackground}>
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
