
import './App.css';
import React from 'react';
import Navbar from './Component/navbar';
import Counters from './Component/counters';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
