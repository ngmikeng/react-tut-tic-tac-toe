import React, { Component } from 'react';
import Game from './components/Game/Game';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">
          React Tutorial Tic-Tac-Toe Game
        </p>
        <div className="App-board">
          <Game/>
        </div>
      </div>
    );
  }
}

export default App;
