import React from 'react';
import './App.css';

import Logo from './components/Logo'
import Login from "./components/Login"
import Cadastro from './components/Cadastro'
import Busca from './components/Busca'
import Pedidos from './components/Pedidos'

import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Cadastro} />
        <Route path="/search" component={Busca} />
        <Route path="/orders" component={Pedidos} />
        <Redirect from="*" to="/"/>
      </Switch>
    </BrowserRouter>
  );

}

export default App;
