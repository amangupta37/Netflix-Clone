import React from "react";
import { Container, FormContainer  } from "./Styles/Signin-Style";
import Theme from "../Theme/Theme";

const Signupform = () => {
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
              autoComplete="off"
              required
            />
            <input id="Password" type="password" placeholder="Password" required/>

            <button type="submit">Sign In</button>

            <p>New to Netflix? <span>Sign up now</span></p>
            <h5>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span> Learn more.</span></h5>
          </form>
        </FormContainer>
       
      </Container>
    </>
  );
};

export default Signupform;
