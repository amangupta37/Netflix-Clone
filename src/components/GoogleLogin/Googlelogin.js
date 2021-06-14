import React from "react";
import { GoogleContainer, IconContainer } from "./Styles/Style-Googlelogin";
import gIcon from "./Styles/Icon/google.ico";

const Googlelogin = (props) => {
  const loginWithGoogle = () => {
    props.userLogin(true);
  };

  return (
    <GoogleContainer>
      <IconContainer onClick={loginWithGoogle}>
        <img src={gIcon} alt="google signin" />
        <span>Login with Google</span>
      </IconContainer>
    </GoogleContainer>
  );
};

export default Googlelogin;
