import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Project from './components/Project'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Home}/>
        <Route path='/projects' component={Project} />
      </div>
    );
  }
}

export default App;
