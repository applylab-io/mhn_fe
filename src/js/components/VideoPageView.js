import React, { Component } from "react";
import uuidv1 from "uuid";
import YoutubePlayer from "./YoutubePlayer";
import filler from "../constants/fillers";
import "../../css/VideoPageView.css";

class VideoPageView extends Component {
    render() {
        return (
            <div className="video-page-view">
                {
                    filler.CHANNELS.map(channel =>
                        <div className="playlist" key={uuidv1()}>
                            <p>{channel.name}</p>
                            <ul>
                                {
                                    filler.VIDEOS
                                        .filter(video => video.channel === channel.name)
                                        .map(video =>
                                            <li key={uuidv1()}>
                                                <YoutubePlayer source={video.src} />
                                            </li>
                                        )
                                }
                                <li key={uuidv1()} className="show-all">
                                    <a href={channel.src} alt={channel.name}>VIEW ALL</a>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default VideoPageView;