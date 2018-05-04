import React, {Component} from 'react';
import axios from 'axios';




class ProjectDetails extends Component {


  constructor(props){
    super(props);
    this.state = {
      details: [],
      id: this.props.match.params.id,
      actions: []
    }
  }

componentDidMount(){
  axios.get(`http://localhost:5000/list/${this.state.id}`)
  .then(response => this.setState({details : response.data}))
  .then(
    axios.get(`http://localhost:5000/actions/${this.state.id}`)
    .then(response => this.setState({actions : [response.data]}))
  )

  .catch(err => console.log(err))
}

render(){
  console.log('state action...',this.state.actions)
  if(this.state.actions.length === 0 || this.state.details.length === 0){
    return ('Loading.....')
  }
  return(
    <div>
      {this.state.details.map(detail => {
        return(
          <ul>
            <li className="link">Id : {detail.id}</li>
            <li className="link">Name : {detail.name}</li>
            <li className="link">Desc : {detail.description}</li>

          </ul>
        )
      })}

      {this.state.actions.map(action => {
        return(
          <ul>
            <li className="link">project-id : {action.project_id}</li>
            <li className="link">notes : {action.notes}</li>
            <li className="link">Desc : {action.description}</li>

          </ul>
        )
      })}
    </div>
  )
}



}



export default ProjectDetails;
