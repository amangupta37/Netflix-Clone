import React from "react";
import {
  Container,
  FormContainer,
  HelpContainer,
  CheckboxContainer,
  HoldhelpContainer,
  WraperContainer,
} from "./Styles/Signin-Style";
import Theme from "../Theme/Theme";
import { Link } from "react-router-dom";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Googlelogin from "../GoogleLogin/Googlelogin";
const Signinform = (props) => {
  return (
    <>
      <Theme />
      <WraperContainer>
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
                Need Help ?
              </HelpContainer>
              <p>
                New to Netflix?
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <span> Sign up now</span>
                </Link>
                <HoldhelpContainer>
                  <Googlelogin userLogin={props.isSignin} />
                </HoldhelpContainer>
              </p>
            </form>
          </FormContainer>
        </Container>
      </WraperContainer>
    </>
  );
};

export default Signinform;
