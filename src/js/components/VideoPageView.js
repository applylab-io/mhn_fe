import React, { Component } from "react";
import YoutubePlayer from "./YoutubePlayer";
import Playlist from "./Playlist";

const youtubePlaylist = [
    {
        source: "https://www.youtube.com/embed/ELVYcEPIKJg"
    },
    {
        source: "https://www.youtube.com/embed/pDHyCzZ1EkY"
    },
    {
        source: "https://www.youtube.com/embed/-5dP9V_K9pM"
    },
    {
        source: "https://www.youtube.com/embed/gwAZwx7X-pE"
    },
    {
        source: "https://www.youtube.com/embed/H8th3dPma2U"
    }
];

class VideoPageView extends Component {
    render() {
        return (
            <div style={baseStyle}>
                <YoutubePlayer scale="3" source="https://www.youtube.com/embed/ELVYcEPIKJg" />
                <Playlist type="youtube" title="Watch more" playlist={youtubePlaylist} />
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

export default VideoPageView;