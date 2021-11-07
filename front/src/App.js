import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



export default class App extends React.Component {
  
  render(){
    return(
      <Router>
          <Switch>
            
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
      </Switch>
      </Router>
    )
  }
}