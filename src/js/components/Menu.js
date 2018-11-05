import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "../../css/Menu.css";

class Menu extends Component {
    render(){
        return(
            <div className="menu">
                <NavLink exact to="/">HOME</NavLink>
                <NavLink to="/partners">PARTNERS</NavLink> 
                <NavLink to="/music">MUSIC</NavLink>
                <NavLink to="/videos">VIDEOS</NavLink>
                <NavLink to="/news">NEWS</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>
        );
    }
}
                
export default Menu;