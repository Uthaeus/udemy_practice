import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { name: 'Name', password: 'Password' }
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value, password: event.target.value }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangeHandler}/>
        <UserOutput name={this.state.users[0].name} password={this.state.users[0].password} />
      </div>
    );
  }
}

export default App;
