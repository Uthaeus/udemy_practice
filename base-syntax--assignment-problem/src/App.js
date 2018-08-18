import React, { Component } from 'react';
import './App.css';

import inputs from './UserInput/UserInput';
import outputs from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Inputs />
        <Outputs />
      </div>
    );
  }
}

export default App;
