import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Form, Home, Laporan, Login, Register } from '../../pages';
import {Header, Footer} from '../../components'

const Routes = () => {
  return (
    <Router>
      <Header />  
      <Switch>
          <Route path = "/login">
            <Login />
          </Route>
          <Route path = "/register">
            <Register />
          </Route>
          <Route path = "/laporan">
            <Laporan />
          </Route>
          <Route path = "/form">
            <Form />
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
