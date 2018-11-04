import React, { Component } from "react";
import logo from "../../logo.svg";
import SocialBar from "./SocialBar";
import Contact from "./Contact";

class Header extends Component {
    render() {
        return (
            <div style={baseStyle}>
                <img src={logo} alt="Music Hub" width="64px" height="64px" title="Music Hub" /> 
                <SocialBar />
                <Contact />
            </div>
        );
    }
}

const baseStyle = {
    display: 'flex',
    flexdirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderBottom: 'groove',
    paddingBottom: '4px',
    paddingTop: '4px',
    marginBottom: '4px'
}

export default Header;