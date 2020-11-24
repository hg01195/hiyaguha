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
            <li><Link exact="true" to="/react_spa/">HOME</Link></li>
            <li><Link to="/react_spa/stuff">RESUME</Link></li>
            <li><Link to="/react_spa/contact">CONTACT</Link></li>
          </ul>
          <div className="content">
            <Switch>
              <Route path="/react_spa/stuff" component={Stuff} />
              <Route path="/react_spa/contact" component={Contact} />
              <Route path="/react_spa/" component={Home} />
            </Switch>
          </div>
          <br>
          </br>
      </BrowserRouter>
    );
  }
}

export default Main;