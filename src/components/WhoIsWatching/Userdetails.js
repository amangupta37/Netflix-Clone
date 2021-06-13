import React from "react";
import {
  Container,
  UserContainer,
  UserImageContainer,
  PlansContainer,
} from "./Styles/Style-UserDetails";

import UserProfile from "./Styles/UserProfile/user.png";
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
      </PlansContainer>
    </Container>
  );
};

export default Userdetails;
