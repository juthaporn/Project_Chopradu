import React from 'react';
import Login from './pages/Login';
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
        
      </Switch>
      </Router>
    )
  }
}