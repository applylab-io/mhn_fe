import React, { Component } from "react";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import YoutubePlayer from "./YoutubePlayer";
import filler from "../constants/fillers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/HomePageView.css";

class HomePageView extends Component {
    render() {
        return (
            <div className="home-page-view">
                <Banner slideDuration={4} />
                <div className="about-preview">
                    <p className="quote">&quot;{filler.ABOUT_PREVIEW_QUOTE.quote}&quot;</p>
                    <p>-{filler.ABOUT_PREVIEW_QUOTE.credits}</p>
                    <p>{filler.ABOUT_PREVIEW_MSG}<NavLink to="/about">{filler.ABOUT_PREVIEW_LINK_TEXT}</NavLink></p>
                </div>
                <div className="videos-preview">
                    <YoutubePlayer source={filler.FEATURED_VIDEO} />
                    <p><span className="preview-title">Videos</span><br /><br />{filler.VIDEO_PREVIEW_TEASER_MSG}<br /><br />{filler.VIDEO_PREVIEW_MSG}<NavLink to="/videos">{filler.VIDEOS_PREVIEW_LINK_TEXT}</NavLink></p>
                </div>
                <div className="contact-preview">
                    <span className="contact-icon"><FontAwesomeIcon icon="users" /></span>
                    <p><span className="preview-title">Contact</span><br /><br />{filler.CONTACT_PREVIEW_MSG}<NavLink to="/contact">{filler.CONTACT_PREVIEW_TEXT}</NavLink></p>
                </div>
            </div>
        );
    }
}

export default HomePageView;