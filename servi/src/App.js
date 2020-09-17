import React from 'react';
import './App.css';

import Login from "./components/Login"
import Logo from './components/Logo'
import Cadastro from './components/Cadastro'

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

function App() {

  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Cadastro} />
        <Redirect from="*" to="/"/>
      </Switch>
    </BrowserRouter>
  );

}

export default App;
