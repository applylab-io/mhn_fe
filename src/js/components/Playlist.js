import React, { Component } from "react";
import uuidv1 from 'uuid';
import YoutubePlayer from "./YoutubePlayer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const playlistDefaults = Object.freeze({
    notSupportedText: "This type of playlist is not supported",
    emptyPlaylistText: "Empty playlist",
    youtube: 'youtube'
});


class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: this.props.playlist,
            type: this.props.type,
            title: this.props.title
        }
    }
    render() {
        if (!this.state.playlist || this.state.playlist.length < 1) {
            return (
                <p><FontAwesomeIcon icon='exclamation-triangle' />&nbsp;{playlistDefaults.emptyPlaylistText}</p>
            );
        }
        if (this.state.type && this.state.type.toLowerCase() === playlistDefaults.youtube) {
            const playlist = this.state.playlist;
            return (
                <div style={playlistContainerStyle}>
                    <h2 style={titleStyle}><FontAwesomeIcon icon={['fab', 'youtube']} />&nbsp;{this.state.title}</h2>
                    <ul style={youtubePlaylistStyle}>
                        {playlist.map(el => (
                            <li key={uuidv1()}>
                                <YoutubePlayer source={el.source} scale="1" />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            return (
                <p><FontAwesomeIcon icon='exclamation-triangle' />&nbsp;{playlistDefaults.notSupportedText}</p>
            );
        }
    }
}

const youtubePlaylistStyle = {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingInlineStart: '0px'
};

const playlistContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
};

const titleStyle = {
    textAlign: 'center'
};

export default Playlist