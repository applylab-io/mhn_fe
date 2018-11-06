import React, { Component } from "react";
import Banner from "./Banner";

class HomePageView extends Component {
    render() {
        return (
            <div style={baseStyle}>
                <Banner slideDuration={4} />
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

export default HomePageView;