import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { NewNft, Home, Manage, Login, Register } from '../../pages';
import {Header, Footer} from '../../components'

const Routes = () => {
  return (
    <Router>
      <Header />  
      <Switch>
          <Route path = "/manage">
            <Manage />
          </Route>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/form">
            <NewNft />
          </Route>
          <Route path = "/">
            <Home />
          </Route>
      </Switch> 
      <Footer />
    </Router>
      )
  
}

export default Routes;
