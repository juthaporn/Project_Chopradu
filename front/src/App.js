// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Router path="/">
            <Login />
          </Router>
        </Switch>
      </Router>
    )
  }
  
}

export default App;
