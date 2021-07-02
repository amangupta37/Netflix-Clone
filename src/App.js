import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup, Userprofile } from "./pages";

import ProtectedRoute from "./Protected/ProtectedRoute";
const App = () => {
  const [userAuth, setuserAuth] = useState(false);

  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/userprofile">
        <Userprofile />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin setuserAuth={setuserAuth} />
      </Route>
      <ProtectedRoute
        path="/browse"
        component={Browse}
        authconfirm={userAuth}
      />
    </Router>
  );
};

export default App;
