import React from "react";
// import PropTypes from 'prop-types';
import "../general.css";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false,
      dropdown: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };

  dropdown = event => {
    this.setState({
      dropdown: !this.state.dropdown
    });
  };

  render() {
    return (
      <div
        className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}
      >
        <div className="HeaderGroup">
          <div className="menu-options responsive">
            <div className="logo">
              <Link to={"/"}>
                <img
                  src={require("../../assets/images/logo8.svg")}
                  alt="Logo"
                />
              </Link>
            </div>
            <Link to={"/"}>
              <p>Features</p>
            </Link>
            <Link to={"/"}>
              <p>Pricing</p>
            </Link>
            <Link to={"/"}>
              <p>Blog</p>
            </Link>
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
            <Link to={"/register"}>
              <button>Register</button>
            </Link>
          </div>
          <div className="narrow">
            <div className="icon-burger">
              <div className="logo">
                <Link to={"/"}>
                  <img
                    src={require("../../assets/images/logo8.svg")}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div onClick={this.dropdown}>
                <img
                  alt="open-burger"
                  className={this.state.dropdown ? null : "menu-icon"}
                  src={require("../../assets/images/nav-hamburger.png")}
                />
                <img
                  alt="close-burger"
                  className={this.state.dropdown ? "menu-icon " : null}
                  src={require("../../assets/images/nav-hamburger-close.png")}
                />
              </div>
            </div>
            <div
              className={
                this.state.dropdown ? " narrow-responsive" : "hide-menu"
              }
            >
              <Link to={"/"}>
                <p>Features</p>
              </Link>
              <Link to={"/"}>
                <p>Pricing</p>
              </Link>
              <Link to={"/"}>
                <p>Blog</p>
              </Link>
              <Link to={"/login"}>
                <p>Login</p>
              </Link>
              <Link to={"/register"}>
                <p>Register</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Menu.propTypes = {
// 	classes: PropTypes.object.isRequired
// };

export default Menu;
