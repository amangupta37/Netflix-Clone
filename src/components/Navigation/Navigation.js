import React from "react";
import {
  NavigationContainer,
  IconContainer,
  LanguageContainer,
  SignupContainer,
  SideContainer,
} from "./styles/Navigation-Style.js";
import { Netflixlogo } from "../Header/Logo/Netflixlogo";

const Navigation = () => {
  return (
    <NavigationContainer>
      <IconContainer>
        <Netflixlogo />
      </IconContainer>
      <SideContainer>
        <LanguageContainer>
          <select>
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </LanguageContainer>
        <SignupContainer>
          <button>Sign In</button>
        </SignupContainer>
      </SideContainer>
    </NavigationContainer>
  );
};

export default Navigation;
