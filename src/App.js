import React, { Component } from 'react';
import Screen from './components/Screen'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="outerbody">
        <div className="calculatorBody">

          <Screen/>
        </div>

      </div>
    );
  }
}

export default App;
