import React, { Component } from 'react';
import Login from './Login/login.js';
import MainContainer from './MainContainer/mainContainer.js';
import './App.css';

class App extends Component {
  
    state = {
        logged: false,
        username: ''
    }

    login = (username) => {
      this.setState({
        logged: true,
        username: username
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Top News</h1>
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
