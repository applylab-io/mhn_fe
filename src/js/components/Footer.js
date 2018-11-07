import React, { Component } from "react";
import logo from "../../applylab_io_logo.svg";

class Footer extends Component {
    render() {
        return (
            <div style={baseStyle}>
                <p>&copy; 2018. Music Hub Pvt. Ltd. All rights reserved.</p>
                <div style={applylabCreditStyle}>
                    <span>Powered by</span>
                    <a href="http://applylab.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'grey' }}>
                        <img src={logo} alt="applylab.io" width="28px" height="28px" title="applylab.io" />
                    </a>
                </div>
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
    backgroundColor: '#d9dbdd',
    color: 'grey',
    fontSize: 'small'
}

const applylabCreditStyle = {
    display: 'flex',
    flexdirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
}

export default Footer;