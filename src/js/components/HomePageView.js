import React, { Component } from "react";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import "../../css/HomePageView.css";

class HomePageView extends Component {
    render() {
        return (
            <div className="home-page-view">
                <Banner slideDuration={4} />
                <h1>We Create Best-In-Industry Music. <NavLink to="/about">Know more...</NavLink></h1>
            </div>
        );
    }
}

export default HomePageView;