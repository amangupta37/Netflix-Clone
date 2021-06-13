import React from "react";
import {
  Container,
  HeaderContainer,
  UserInfoContainer,
  HeaderLogoContainer,
} from "./Styles/Styles-UserProfile";

import { Netflixlogo } from "../Header/Logo/Netflixlogo";
import Userdetails from "../WhoIsWatching/Userdetails";
const User = () => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLogoContainer>
          <Netflixlogo />
        </HeaderLogoContainer>
      </HeaderContainer>
      <UserInfoContainer>
        <h1>Who's Watching ?</h1>
        <Userdetails />
      </UserInfoContainer>
    </Container>
  );
};

export default User;
