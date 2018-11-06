import React, { Component } from "react";
import logo from "../../applylab_io_logo.svg";

class Footer extends Component {
    render() {
        return (
            <div style={baseStyle}>
                <p>&copy; 2018. Music Hub Pvt. Ltd. All rights reserved.</p>
                <div style={applylabCreditStyle}>
                    <img src={logo} alt="applylab.io" width="64px" height="64px" title="applylab.io" />
                    <ul style={applylabCreditTextStyle}>
                        <li>Powered by</li>
                        <li><a href="http://applylab.io" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'grey'}}>applylab.io</a></li>
                    </ul>
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

const applylabCreditTextStyle = {
    paddingInlineStart: '0px',
    listStyle: 'none'
}
export default Footer;