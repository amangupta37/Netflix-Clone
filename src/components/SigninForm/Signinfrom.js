import React from "react";
import {
  Container,
  FormContainer,
  GoogleContainer,
  IconContainer,
  HelpContainer,
  CheckboxContainer,
  helpboxContainer,
} from "./Styles/Signin-Style";
import Theme from "../Theme/Theme";
import { Link } from "react-router-dom";
import gIcon from "./Styles/Icon/google.ico";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
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
            <HelpContainer>
              <CheckboxContainer>
                <CheckBoxIcon />
                <p>Remember me</p>
              </CheckboxContainer>
              <helpboxContainer>Need Help ?</helpboxContainer>
            </HelpContainer>

            <p>
              New to Netflix?
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <span> Sign up now</span>
              </Link>
            </p>
          </form>
        </FormContainer>
        <GoogleContainer>
          <IconContainer>
            <img src={gIcon} alt="google signin" />
            <span>Login with Google</span>
          </IconContainer>
        </GoogleContainer>
      </Container>
    </>
  );
};

export default Signinform;
