import React, { Component } from "react";

const playerDefaults = Object.freeze({
    source: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/218907323&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
});

class SoundcloudPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.source || playerDefaults.source
        };
    }
    render() {
        return (
            <iframe
                width="100%"
                height="auto"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src={this.state.source}
            ></iframe>
        );
    }
}

export default SoundcloudPlayer;