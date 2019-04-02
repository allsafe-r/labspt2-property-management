import React from 'react';
import '../../assets/css/general.css';
import Register from '../auth/register'

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegister: false
    }
  }

  toggleRegister() {
    this.setState({
      showRegister: !this.state.showRegister
    })
  }
  
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1 className="popup-h1">How would you like to use Tenantly?</h1>
            <button onClick={this.toggleRegister.bind(this)}> Register </button>
						</div>
					{this.state.showRegister? 
						<Register
							closePopup={this.toggleRegister.bind(this)}
							/>
						: null
						
						}
				
          <button onClick={this.props.closePopup}>close me</button>
        
        </div>
      );
    }
  }
  export default Popup;
