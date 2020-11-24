import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {

  render() {
    return (
      <BrowserRouter>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <h1>Hiya.Guha</h1>
          <ul className="header">
            <li><Link exact="true" to="/">HOME</Link></li>
            <li><Link to="/stuff">RESUME</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
          <div className="content">
            <Switch>
              <Route path="/stuff" component={Stuff} />
              <Route path="/contact" component={Contact} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
          <br>
          </br>
      </BrowserRouter>
    );
  }
}

export default Main;