import React, { Component } from "react";
import filler from "../constants/fillers";
import "../../css/Banner.css";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerIndex: 0
        };
        this.changeBanner = this.changeBanner.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(this.changeBanner, this.props.slideDuration * 1000);
    }
    componentWillUnmount() {
        if (this.interval) clearInterval(this.interval)
    }
    changeBanner() {
        this.setState(function ({ bannerIndex }) {
            const nextBannerIndex = ++bannerIndex % filler.BANNER_GALLERY.length
            return { bannerIndex: nextBannerIndex }
        }, function () {
            this.interval = setInterval(this.changeBackground, this.props.slideDuration * 1000);
        });
    }
    render() {
        return (
            <div className="banner">
                <img src={filler.BANNER_GALLERY[this.state.bannerIndex]} alt="BANNER" width="100%" />
            </div>
        );
    }
}

export default Banner;