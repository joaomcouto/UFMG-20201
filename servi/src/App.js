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
