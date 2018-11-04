import React, { Component } from "react";
import uuidv1 from 'uuid';
import YoutubePlayer from "./YoutubePlayer";
import SoundcloudPlayer from "./SoundcloudPlayer";
import AudioWidget from "./AudioWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const playlistDefaults = Object.freeze({
    notSupportedText: "This type of playlist is not supported",
    emptyPlaylistText: "Empty playlist",
    youtube: 'youtube',
    soundcloud: 'soundcloud',
    audio: 'audio'
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
        } else if (this.state.type && this.state.type.toLowerCase() === playlistDefaults.soundcloud) {
            const playlist = this.state.playlist;
            return (
                <div style={playlistContainerStyle}>
                    <h2 style={titleStyle}><FontAwesomeIcon icon={['fab', 'soundcloud']} />&nbsp;{this.state.title}</h2>
                    <ul style={audioPlaylistStyle}>
                        {playlist.map(el => (
                            <li key={uuidv1()}>
                                <SoundcloudPlayer source={el.source} />
                            </li>
                        ))}
                    </ul>
                </div>
            );
        } else if (this.state.type && this.state.type.toLowerCase() === playlistDefaults.audio) {
            const playlist = this.state.playlist;
            return (
                <div style={playlistContainerStyle}>
                    <h2 style={titleStyle}><FontAwesomeIcon icon='music' />&nbsp;{this.state.title}</h2>
                    <ul style={audioPlaylistStyle}>
                        {playlist.map(el => (
                            <li key={uuidv1()}>
                                <AudioWidget source={el} />
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

const audioPlaylistStyle = {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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