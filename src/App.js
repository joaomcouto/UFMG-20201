import React from 'react';
import './App.css';
import Logo from './components/Logo.js'

function App() {

  const [page, setPage] = React.useState("Logo");

  switch (page){
    case 'Logo':
      return (<Logo />);
  }

}

export default App;
