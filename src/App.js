import React from 'react';
import './App.css';

import Login from "./components/Login"
import Logo from './components/Logo'
import Cadastro from './components/Cadastro'

import { history } from './_helpers';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {

  return  (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Logo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Cadastro} />
        <Redirect from="*" to="/"/>
      </Switch>
    </Router>
  );



  // const [page, setPage] = React.useState("Logo");
  
  
  // switch (page){
  //   case 'Logo':
  //     return (<Logo setPage={setPage}/>);
  //   case 'Cadastro':
  //     return (<Cadastro setPage={setPage}/>);
  //   default:
  //     return;
  // }

}

export default App;
