import React, { Component } from 'react';
import Game from './components/Game/Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
