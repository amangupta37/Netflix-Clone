import React, { useState } from "react";
import Signinfrom from "../components/SigninForm/Signinfrom";
import Userprofile from "./Userprofile";

const Signin = ({ setuserAuth }) => {
  const [userIn, setuserIn] = useState(
    JSON.parse(localStorage.getItem("pageRedirect"))
  );
  setuserAuth(userIn);

  return (
    <>
      {userIn ? (
        <Userprofile isSignin={setuserIn} />
      ) : (
        <Signinfrom isSignin={setuserIn} />
      )}
    </>
  );
};

export default Signin;
