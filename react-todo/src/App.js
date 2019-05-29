import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Chat from "./components/Chat";
import Message from "./components/Message";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route exact path="/" component={Main} />
            <Route path="/Chat" component={Chat} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
          </div>
        </Router>
    );
  }
}

export default App;
