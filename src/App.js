import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {

  const [page, setPage] = React.useState("");

  return (
    <div className="App">
      <h1>It's Servi</h1>
      <p>...but it does nothing yet.</p>
      {/* <input val=""></input> */}
      <Button variant="contained" onClick={() => setPage('Arroz')}>Submit</Button>
    </div>
  );
}

export default App;
