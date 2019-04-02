import React, { Component } from 'react';

export default class tenantSettings extends Component {
	state = {
		email: '',
		phone: '',
		textSubscribe: false,
		emailSubscribe: false,
		oldPW: '',
		newPW: ''
	};

	componentDidMount() {
		let id = localStorage.getItem('userId');
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
	};

	handleCheckboxChange = (e) => {
		this.setState({ [e.target.name]: e.target.checked });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div>
						<input placeholder="email" name="email" value={this.state.email} onChange={this.onChange} type="text" />
					</div>
					<div>
						<input placeholder="phone" name="phone" value={this.state.phone} onChange={this.onChange} type="text" />
					</div>
					<div>
						<input
							type="checkbox"
							name="textSubscribe"
							value={this.state.textSubscribe}
							onChange={this.handleCheckboxChange}
						/>
						<span>Get texts</span>
						<input
							type="checkbox"
							name="emailSubscribe"
							value={this.state.emailSubscribe}
							onChange={this.handleCheckboxChange}
						/>
						<span>Get emails?</span>
					</div>
					<div>
						<input
							placeholder="password"
							name="oldPW"
							value={this.state.oldPW}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<div>
						<input
							placeholder="new password"
							name="newPW"
							value={this.state.newPW}
							onChange={this.onChange}
							type="password"
						/>
					</div>{' '}
					<div>
						<input
							placeholder="new password"
							name="newPW"
							value={this.state.newPW}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<button>Submit Changes</button>
				</form>
			</div>
		);
	}
}
