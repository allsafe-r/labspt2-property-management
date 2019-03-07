import React, { Component } from "react";
import axios from 'axios';


export default class WorkorderCard extends Component {
    
        constructor(props){
        super(props);
        this.state = {
          id: props.key,
          property: props.work.property,
          tenant: props.work.tenant,
          description: props.work.description,
          phone: props.work.phone,
          status: props.work.status 
        }
        
    }
    


inputs = ["Pending" , "In Progress", "Completed"]

statushandler = (update, e) => {
    

this.setState({
    status: e.target.value
})
         
let  updatedworkorder = {
    
          id: this.state.id,
          property: this.state.property,
          tenant: this.state.tenant,
          description: this.state.description,
          phone: this.state.phone,
          status: this.state.status 
}        

    axios
      .put(`https://tenantly-back-end.herokuapp.com/properties/${this.props.key}`, this.state)
      .then(response => {
      console.log('success')
        })
      
      .catch(error => {
        console.log(error);
      });
      
}

 render() {
    return (
        <div className="property-card">
        <div className="buttons-container">
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <h1>{this.props.work.property}</h1>
        <h1>{this.props.work.tenant}</h1>
        <h1>{this.props.work.description}</h1>
        <h1>{this.props.work.phone}</h1>
        <h1>{this.props.work.unsupervisedEntry}</h1>
        
           { this.inputs.map((value, i) => (
                <div key={i}>
                <input type="radio" name="status" value={value} onChange={this.statushandler(value)} checked={this.state.status === value} />
                </div>
            ))}
           
          
        </div>

        

      
    )
}
}

//export default WorkorderCard;