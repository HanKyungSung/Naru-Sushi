import React from "react";
import { 
    BrowserRouter as Router,
    Route,
    Switch 
} from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Layout from "../containers/Layout/Layout";

import {
    LOGIN,
    REGISTER
} from "./Paths";

function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
            <Route exact path={LOGIN}>
                <Login />
            </Route>
            <Route exact path={REGISTER}>
                <Register />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
