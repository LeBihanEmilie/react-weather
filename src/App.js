import React, { Component } from 'react';
import './App.css';

import Weather from './Components/Weather/Weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Weather />
        </header>
      </div>
    );
  }
}

export default App;

// ddb60ade3c57c2ae9f4de0de42abcdcc
// api.openweathermap.org/data/2.5/weather?lat=35&lon=139