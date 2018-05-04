import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

export default class Project extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/projects/').then(response => {
      // console.log('from cdm ...', response.data)
      this.setState({projects: response.data})
      // console.log('after setstate...', this.state.projects)
    }).catch(err => console.log(err))
  }

  render() {
    return (<div>
      {
        this.state.projects.map(project => {
          return (<ul>
            <Link to={`/projects/${project.id}`}>
              <li className="link">{project.name}</li>
            </Link>
            <li className="link">{project.description}</li>
          </ul>)
        })
      }
    </div>)
  }
}
