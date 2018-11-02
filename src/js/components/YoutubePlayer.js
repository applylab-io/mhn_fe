import React, { Component } from "react";

const playerDefaults = Object.freeze({
    allowOptions: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    source: "https://www.youtube.com/embed/ELVYcEPIKJg",
    frameborder: "0"
});

class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.src,
            allowOptions: this.props.src
        };
    }
    render() {
        const source = this.state.src || playerDefaults.source;
        const allowOptions = getFinalAllowOptions(this.state.allowOptions);
        return (
            <iframe
                src={source}
                frameborder={playerDefaults.frameborder}
                allow={allowOptions}
                allowfullscreen>
            </iframe>
        );
    }
}

const toCsv = (accumulator, current) => accumulator + '; ' + current;

const getFinalAllowOptions = (allowOptions) => allowOptions && allowOptions.length > 0 ? playerDefaults.allowOptions + '; ' + allowOptions.reduce(toCsv) : playerDefaults.allowOptions;

export default YoutubePlayer;