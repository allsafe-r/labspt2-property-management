import React, { Component } from "react";
import axios from 'axios';
import WorkorderCard from "./workorderCard";

export default class WorkorderList extends Component  {

    constructor(props){
        super(props);
        this.state = {
            workorders: []
        };
    }

   /* componentDidMount(){
        axios
        .get('/api/workorders')
        .then(response => {
            this.setState(() => ({workorders: response.data}));
        })
        .catch(error => {
            console.error('Server Error', error);
        });
    }
    */



render(){
    return (
        <div className="workorderlist">
        {this.props.workorders.map(work => (
            <workorderCard key={work.id} work={work} />
        ))}
        </div>
    
    )
}

}