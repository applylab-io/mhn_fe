import React, { Component } from "react";
import filler from "../constants/fillers";
import ceo from "../../CEO.jpg";
import "../../css/AboutPageView.css";

class AboutPageView extends Component {
    render() {
        return (
            <div className="about-page-view">
                <p className="about-title">About Us</p>
                <div className="about-content">
                    <div className="director-section">
                        <img src={ceo} alt="ceo" width="240px" />
                        <p>
                            <span>- {filler.DIRECTOR_NAME}</span>
                            <br />
                            <span>{filler.DIRECTOR_TITLE}</span>
                        </p>
                    </div>
                    <div className="about-para">
                        <p>{filler.ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPageView;