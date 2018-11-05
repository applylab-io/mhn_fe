import React, { Component } from "react";

class NoMatch extends Component {
    render() {
        return (
            <div style={baseStyle}>
                <h2 style={{textAlign: "center", color: "red"}}>404. URL Not Found.</h2>
            </div>
        );
    }
}

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '100%'
};

export default NoMatch;