import React, { Component } from "react";
import logo from "../../logo.svg";
import SocialBar from "./SocialBar";
import Menu from "./Menu";
import Contact from "./Contact";
import "../../css/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="Music Hub" width="64px" height="64px" title="Music Hub" />
                <div className='menu-container'>
                    <SocialBar />
                    <Menu />
                </div>
                <Contact />
            </div>
        );
    }
}

export default Header;