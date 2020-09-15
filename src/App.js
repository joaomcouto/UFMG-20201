import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo.js'
import Cadastro from './components/Cadastro/Cadastro.js'

function App() {

  const [page, setPage] = React.useState("Logo");

  switch (page){
    case 'Logo':
      return (<Logo setPage={setPage}/>);
    case 'Cadastro':
      return (<Cadastro setPage={setPage}/>);
    default:
      return;
  }

}

export default App;
