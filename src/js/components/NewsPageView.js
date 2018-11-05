import React, { Component } from "react";

class NewsPageView extends Component {
    render() {
        return (
            <div style={baseStyle}>
                <h2 style={{textAlign: "center"}}>This is news page</h2>
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

export default NewsPageView;