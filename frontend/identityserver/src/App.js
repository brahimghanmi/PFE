import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Login from "./components/login.component";
import Dashboard from "./components/dashboard.component";
import Signup from "./components/signup.component";
import UserList from "./elements/userList";
function App() {
  return (
    <Router>
<div className="App">




      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
           <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/users" component={UserList}/>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
 
  );
}

export default App;
