import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Project extends Component {
  constructor(){
    super()
    this.state = {
      project: [],
    }
  }

    render(){
      return(
        <div> <h1> projects rendered...</h1></div>
      )
    }
}
