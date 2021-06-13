import React from "react";
import {
  Container,
  FormContainer,
  GoogleContainer,
  IconContainer,
} from "./Styles/Signin-Style";
import Theme from "../Theme/Theme";
import { Link } from "react-router-dom";
import gIcon from "./Styles/Icon/google.ico";
const Signinform = () => {
  return (
    <>
      <Theme />
      <Container>
        <span>Sign In</span>
        <FormContainer>
          <form>
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

            <button type="submit">Sign In</button>
            <GoogleContainer>
              <IconContainer>
                <img src={gIcon} alt="google signin" />
                <span>Login with Google</span>
              </IconContainer>
            </GoogleContainer>
            <p>
              New to Netflix?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span> Sign up now</span>
              </Link>
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

export default Signinform;
