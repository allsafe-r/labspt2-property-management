import React, { Component } from "react";



const WorkorderCard = (props) => {

const inputs = ["Pending" , "In Progress", "Completed"]

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
        
           { inputs.map((value, i) => (
                <div key={i}>
                <input type="radio" name="status" value={value} onChange='#' checked={this.props.work.status === value} />
                </div>
            )
           )
           }
</div>

        

      
    )
}

export default WorkorderCard;