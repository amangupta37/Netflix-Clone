import React from "react";
import { GoogleContainer, IconContainer } from "./Styles/Style-Googlelogin";
import gIcon from "./Styles/Icon/google.ico";
import { auth, provider } from "../../lib/firebase.prod";

const Googlelogin = (props) => {
  const loginWithGoogle = () => {
    auth.signInWithPopup(provider).then((userData) => {
      const googleUserData = {
        name: userData.user.displayName,
        image: userData.user.photoURL,
      };

      console.log(googleUserData);
      localStorage.setItem("googleData", JSON.stringify(googleUserData));
      localStorage.setItem("pageRedirect", JSON.stringify(true));

      props.userLogin(true);
    });
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
