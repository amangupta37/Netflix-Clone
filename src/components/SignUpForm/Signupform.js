import React from "react";
import Theme from "../Theme/Theme";
import { Container, FormContainer } from "./Styles/Signupform-Style";

const Signupform = () => {
  return (
    <>
      <Theme />
      <Container>
        <span>Sign Up</span>
        <FormContainer>
          <form>
            <input
              id="username"
              type="text"
              placeholder="First Name"
              autoComplete="off"
              required
            />

            <input
              id="username"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <input
              id="Password"
              type="password"
              placeholder="Password"
              required
            />

            <button type="submit">Sign Up</button>

            <p>
              Already a user? <span>Sign In</span>
            </p>
            <h5>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<span> Learn more.</span>
            </h5>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Signupform;
