import React, { Component } from 'react';
import SignIn from "./signedin";
import {
    BrowserRouter as Router,
    Route,
    Switch, Link
  } from "react-router-dom";

class account extends Component {
    render() {
        return (
            // <Router>
      <div>
        {/* /* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signout">Sign out</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
          </ul>
        </nav> */} 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
        <Route path="/account">
            <Account />
          </Route>
          <Route path="/signedin">
            <SignIn />
          </Route>
          {/* <Route path="/signout">
            <SignOut />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route>
        </Switch> */} 
      </div>
        )
    // {/* </Router> */}
      }  // );
    
}

export default account;