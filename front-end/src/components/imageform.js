import React from 'react'
const axios = require("axios");

class Imageform extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null,
            url: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:9000/images",formData,config)
            .then((response) => {
<<<<<<< HEAD
                this.setState({url: response.data})
                this.updateUrl();
                
=======
                this.setState({url: response.url});
                alert("The file is successfully uploaded");
>>>>>>> 02149efc3a4aabf7fe571690ee9231eaa58ea9de
            }).catch((error) => {
        });
    }

    updateUrl(){
        this.props.url(this.state.url);
    }

    onChange(e) {
        this.setState({file:e.target.files[0]});
        
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
<<<<<<< HEAD
                <input type="file" name="image" onChange= {this.onChange} />
=======
                <input type="file" name="myImage" onChange={this.onChange} urlvalue={this.state.url} />
>>>>>>> 02149efc3a4aabf7fe571690ee9231eaa58ea9de
                <button type="submit">Upload</button>
            </form>
        )
    }
}

export default Imageform