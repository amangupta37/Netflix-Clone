import React from "react";
import { Container, FormContainer, btnConatiner } from "./Styles/Signup-Style";
import Theme from "../Theme/Theme";

const Signupfrom = () => {
  return (
    <>
      <Theme />
      <Container>
        <span>Sign In</span>
        <FormContainer>
          <form>
            <input
              id="username"
              type="text"
              placeholder="Email or phone number"
            />
            <input id="password" type="password" placeholder="password" />
            <btnConatiner>
              <button type="submit">Sign In</button>
            </btnConatiner>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Signupfrom;
