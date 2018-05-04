import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Home}/>
    
      </div>
    );
  }
}

export default App;
