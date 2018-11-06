import React, { Component } from "react";
import filler from "../constants/fillers";
import "../../css/Banner.css";

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img src={filler.BANNER_IMG} alt="BANNER IMAGE" width="100%" />
            </div>
        );
    }
}

export default Banner;