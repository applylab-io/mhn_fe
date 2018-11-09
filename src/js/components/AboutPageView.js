import React, { Component } from "react";
import filler from "../constants/fillers";
import "../../css/AboutPageView.css";

class AboutPageView extends Component {
    render() {
        return (
            <div className="about-page-view">
                <h1>Overview</h1>
                <p>{filler.PARA}</p>}
                <h1>Our People</h1>
                <p>{filler.PARA}</p>}
                <h1>Our Infrastructure</h1>
                <p>{filler.PARA}</p>}      
                <h1>Our Quality</h1>
                <p>{filler.PARA}</p>}                          
                <h1>Our Partners</h1>
                <p>{filler.PARA}</p>}
                <h1>Publishing</h1>
                <p>{filler.PARA}</p>}                
                <h1>Contact Us</h1>
                <p>{filler.PARA}</p>}
            </div>
        );
    }
}

export default AboutPageView;