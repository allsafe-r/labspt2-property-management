import React, { Component } from "react";
import axios from "axios";

const url = "https://tenantly-back.herokuapp.com/images";

class HouseApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      url: null
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] });
    const formData = new FormData();
    formData.append("image", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    axios
      .post(url, formData, config)
      .then(response => {
        this.setState({ url: response.data });
        this.updateUrl();
      })
      .catch(error => {});
  }

  updateUrl() {
    this.props.url(this.state.url);
  }

  render() {
    return (
      <div className="addApp">
        <h2>Housing Application</h2>
        <input type="file" name="image" onChange={this.onChange} />
      </div>
    );
  }
}

export default HouseApp;