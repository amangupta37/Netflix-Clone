import React from "react";
import User from "../components/UserProfile/User";
const Userprofile = (props) => {
  return (
    <div>
      <User isSignin={props.isSignin} />
    </div>
  );
};

export default Userprofile;
