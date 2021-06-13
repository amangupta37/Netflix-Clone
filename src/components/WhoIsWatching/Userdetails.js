import React from "react";
import {
  Container,
  UserContainer,
  UserImageContainer,
  PlansContainer,
  SignoutContainer,
} from "./Styles/Style-UserDetails";

import UserProfile from "./Styles/UserProfile/user.png";
import Plan from "../Plans/Plan";

const Userdetails = () => {
  return (
    <Container>
      <UserContainer>
        <UserImageContainer>
          <img src={UserProfile} alt="userprofile" />
          <span>
            <p>Aman Gupta</p>
          </span>
        </UserImageContainer>
      </UserContainer>
      <PlansContainer>
        <h1>Plans</h1>
        <Plan />
        <SignoutContainer>
          <button>Sign out</button>
        </SignoutContainer>
      </PlansContainer>
    </Container>
  );
};

export default Userdetails;
