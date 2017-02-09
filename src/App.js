import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './seed_data/menu_items';
import DisplayItem from './components/displayItem'

class App extends Component {
  render() {
    console.log(Items)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <DisplayItem items={Items}/>
      </div>
    );
  }
}

export default App;
