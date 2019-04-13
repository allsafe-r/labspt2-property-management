import React from 'react';
const axios = require('axios');
// const url = process.env.imagePost || 'http://localhost:9000/images';
const url = 'https://tenantly-back.herokuapp.com/images';

class Imageform extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: null,
			url: null
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onFormSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('image', this.state.file);
		const config = {
			headers: {
				'content-type': 'multipart/form-data'
			}
		};
		axios
			.post(url, formData, config)
			.then((response) => {
				this.setState({ url: response.data });
				this.updateUrl();
			})
			.catch((error) => {});
	}

	updateUrl() {
		this.props.url(this.state.url);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({ file: e.target.files[0] });
	}

	render() {
		return (
			// TENANT 
			<form>
				<h1>File Upload</h1>
				<input type="file" name="image" onChange={this.onChange} />
				<button onClick={this.onFormSubmit}>Upload</button>
			</form>
		);
	}
}

export default Imageform;
