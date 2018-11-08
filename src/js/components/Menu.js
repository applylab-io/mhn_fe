import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/Menu.css";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <div className="menu-subcontainer">
                <div className="menu" style={{display: this.state.isToggleOn ? "none": "flex" }}>
                    <NavLink exact to="/">HOME</NavLink>
                    <NavLink to="/partners">PARTNERS</NavLink>
                    <NavLink to="/music">MUSIC</NavLink>
                    <NavLink to="/videos">VIDEOS</NavLink>
                    <NavLink to="/news">NEWS</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div>
                <div className="menu-toggle" onClick={this.handleToggle}>
                    <FontAwesomeIcon icon="bars" />
                </div>
            </div>
        );
    }
}

export default Menu;