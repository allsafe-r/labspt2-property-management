import React, { Component } from 'react';
import axios from 'axios';

import HouseApp from './houseApp';

const url = "https://tenantly-back.herokuapp.com/api/register";
const mail = "https://tenantly-back.herokuapp.com/send";

class TenantInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: '',
			isAdmin: false,
			phone: '',
			emailSubscribe: false,
			textSubscribe: false,
			application: null
		};
	}
	inputHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		this.setState({
			password: this.state.phone
		});
	};



  addTenant = e => {
    e.preventDefault();
    axios
      .post(url, this.state)
      .then(() => {
        console.log("working");
        let email = { 
          "name": this.state.firstName,
          "email": this.state.email,
          "password": this.state.phone
        }
        axios
            .post(mail, email)
            .then(()=>{
              console.log('sent');
            })
            .catch(err=> {
              console.log({Error: err});
            })
      })
      .catch(err => {
        console.log({ Error: err });
      });
  };

	urlUpdater = (imageurl) => {
		console.log(imageurl);
		this.setState({
			application: imageurl
		});
	};

	render() {
		return (
			<div className="tenant-info">
				<div>
					<h1>Tenant Info</h1>
					<form>
						<div className="tenantCard-top">
							<div className="inputInfo">
								<div className="name-input">
									<input type="firstName" name="firstName" placeholder="First Name" onChange={this.inputHandler} />
									<input type="lastName" name="lastName" placeholder="Last Name" onChange={this.inputHandler} />
								</div>
								<div className="eN-input">
									<input type="email" name="email" placeholder="Email" onChange={this.inputHandler} />

									<input type="phone" name="phone" placeholder="Mobile #" onChange={this.inputHandler} />
								</div>
							</div>
							<div className="flex-row">
								<h1>Email?</h1>
								<input type="radio" name="email" />
								<h1>Texts?</h1>
								<input type="radio" name="text" />
							</div>
						</div>
						<div className="tenantCard-bottom">
							<HouseApp url={this.urlUpdater} />
						</div>
					</form>
					<button onClick={this.addTenant}>Create</button>
				</div>
			</div>
		);
	}
}

export default TenantInfo;
