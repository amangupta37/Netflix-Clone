import React from "react";
import {
  Container,
  UserContainer,
  UserImageContainer,
  PlansContainer,
  SignoutContainer,
} from "./Styles/Style-UserDetails";

// import UserProfile from "./Styles/UserProfile/user.png";
import Plan from "../Plans/Plan";
import { auth } from "../../lib/firebase.prod";
import { Link } from "react-router-dom";

const Userdetails = (props) => {
  const userLogout = () => {
    auth.signOut().then(() => {
      props.logout(false);
      localStorage.clear();
    });
  };

  const userInfo = JSON.parse(localStorage.getItem("googleData"));

  return (
    <Container>
      <UserContainer>
        <UserImageContainer>
          <Link to="/browse">
            <img src={userInfo.image} alt="userprofile" />
          </Link>
          <span>
            <p>{userInfo.name}</p>
          </span>
        </UserImageContainer>
      </UserContainer>
      <PlansContainer>
        <h1>Plans</h1>
        <Plan />
        <SignoutContainer>
          <button onClick={userLogout}>Sign out</button>
        </SignoutContainer>
      </PlansContainer>
    </Container>
  );
};

export default Userdetails;
