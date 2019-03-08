import React, { Component } from "react";
import axios from 'axios';
import Workordercard from "./workorderCard";

export default class Workorderlist extends Component  {

    constructor(props){
        super(props);
        this.state = {
            workorders: []
        };
    }

    componentDidMount(){
        /*axios
        .get('https://tenantly-back-end.herokuapp.com/workorders')
        .then(response => { */
            this.setState(() =>({workorders: [
			{
			    id: 1,
				property: 1,
				tenant: 2,
				description: 'Air conditioner does not blow cold air!',
				phone: '415-555-6132',
				unsupervisedEntry: true,
				status: 'Pending'
			},
			{
			    id: 2,
				property: 2,
				tenant: 3,
				description: 'None of the toilets flush!',
				phone: '202-555-6132',
				unsupervisedEntry: true,
				status: 'Completed'
			}
		]}));          //({workorders: response.data}));
        /*})
        .catch(error => {
            console.error('Server Error', error);
        }); */
        
    }
    



render(){
    return (
        <div className="workorderlist">
        {this.state.workorders.map(work => (
            <Workordercard key={work.id} work={work} />
        ))}
        </div>
    
    )
}

}