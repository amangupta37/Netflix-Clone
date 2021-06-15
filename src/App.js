import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Browse, Signin, Signup, Userprofile } from "./pages";

import ProtectedRoute from "./Protected/ProtectedRoute";
const App = () => {
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
        <Signin />
      </Route>
      <ProtectedRoute path="/browse" component={Browse} />
    </Router>
  );
};

export default App;
