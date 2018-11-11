import React, { Component } from "react";
import "../../css/YoutubePlayer.css";
import filler from "../constants/fillers";

const playerDefaults = Object.freeze({
    allowOptions: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    frameborder: "0",
    width: 320,
    height: 180
});

class YoutubePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.source,
            allowOptions: this.props.allowOptions,
            scale: this.props.scale || "1"
        };
    }

    render() {
        if (!this.state.source) {
            
            return (
                <h3 className="no-content-message">{filler.PLAYER_NO_CONTENT_MSG}}</h3>
            );
        }
        const allowOptions = getFinalAllowOptions(this.state.allowOptions);

        return (
            <div className="youtube-player">
                <iframe
                    title={this.state.source}
                    width={playerDefaults.width * parseFloat(this.state.scale) + "px"}
                    height={playerDefaults.height * parseFloat(this.state.scale) + "px"}
                    src={this.state.source}
                    frameBorder={playerDefaults.frameborder}
                    allow={allowOptions}
                    allowFullScreen>
                </iframe>
            </div>
        );
    }
}

const toCsv = (accumulator, current) => accumulator + '; ' + current;

const getFinalAllowOptions = (allowOptions) => allowOptions && allowOptions.length > 0 ? playerDefaults.allowOptions + '; ' + allowOptions.reduce(toCsv) : playerDefaults.allowOptions;

export default YoutubePlayer;