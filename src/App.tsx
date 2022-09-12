import React from 'react';
import { Header } from './components/Header';
import { Map } from './components/Map';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Map />
      </div>
    </div>
  );
}

export default App;
