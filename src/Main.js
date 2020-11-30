import React, { Component } from "react";
import {
  Route,
  Link,
  BrowserRouter,
  Switch
} from "react-router-dom";
import Home from "./Home";

class Main extends Component {

  render() {
    return (
      <div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <br></br><br></br><br></br>
        <button><a target="_blank" style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/hiyaguha/">LinkedIn🔗</a></button>
        <br></br><br></br><br></br>
        {/* <button style={{marginLeft:"130px"}}>
        <a target="_blank" style={{ textDecoration: 'none'}} href="https://www.scribd.com/document/486325623/Hiya-Guha-Resume">Resume⚒</a></button>
         */}
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <h1>Hiya.Guha</h1>
        <div className="underline">
        </div>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        <br></br><br></br><br></br>
        {/* <div className="content">
        <p>B.S. in Computer Science from Georgia Southern University</p>
        </div> */}
        <button>
        <a target="_blank" style={{ textDecoration: 'none'}} href="https://github.com/hg01195">Github👩🏾‍💻</a></button>
      
      </div>
    );
  }
}

export default Main;