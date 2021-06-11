import React from "react";
import {
  NavigationContainer,
  IconContainer,
  LanguageContainer,
  SignupContainer,
  SideContainer,
} from "./styles/Navigation-Style.js";
import { Netflixlogo } from "../Header/Logo/Netflixlogo";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationContainer>
      <IconContainer>
        <Link to="/">
          <Netflixlogo />
        </Link>
      </IconContainer>
      <SideContainer>
        <LanguageContainer>
          <select>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </LanguageContainer>
        <SignupContainer>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
        </SignupContainer>
      </SideContainer>
    </NavigationContainer>
  );
};

export default Navigation;
