import React, { Component } from "react";
import logo from "../../applylab_io_logo.svg";
import "../../css/Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>&copy; 2018. Music Hub Pvt. Ltd. All rights reserved.</p>
                <div className="applylab-credits">
                    <span>Powered by</span>
                    <a href="http://applylab.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'grey' }}>
                        <img src={logo} alt="applylab.io" width="28px" height="28px" title="applylab.io" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;