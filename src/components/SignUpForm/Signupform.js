import React from "react";
import Theme from "../Theme/Theme";
import {
  Container,
  FormContainer,
  recaptchaContainer,
  WraperContainer,
} from "./Styles/Signupform-Style";
import { Link } from "react-router-dom";

const Signupform = () => {
  return (
    <>
      <Theme />
      <WraperContainer>
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
                Already a user ?
                <Link to="/signin" style={{ textDecoration: "none" }}>
                  <span> Sign In</span>
                </Link>
              </p>

              <recaptchaContainer>
                <h6>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.<span> Learn more.</span>
                </h6>
              </recaptchaContainer>
            </form>
          </FormContainer>
        </Container>
      </WraperContainer>
    </>
  );
};

export default Signupform;
