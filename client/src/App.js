import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Home}/>
        <Route path='/projects' component={Project} />
        <Route path='Projects/:id' component={ProjectDetails} />
      </div>
    );
  }
}

export default App;
