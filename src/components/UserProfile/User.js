import React from "react";
import {
  Container,
  HeaderContainer,
  UserInfoContainer,
  HeaderLogoContainer,
} from "./Styles/Styles-UserProfile";

import { Netflixlogo } from "../Header/Logo/Netflixlogo";
import Userdetails from "../WhoIsWatching/Userdetails";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLogoContainer>
          <Link to="/">
            <Netflixlogo />
          </Link>
        </HeaderLogoContainer>
      </HeaderContainer>
      <UserInfoContainer>
        <h1>Who's Watching ?</h1>
        <Userdetails logout={props.isSignin} />
      </UserInfoContainer>
    </Container>
  );
};

export default User;
