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

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
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
							placeholder="old password"
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
