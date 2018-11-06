import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AudioWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.source.title,
            singer: this.props.source.singer,
            soundcloud: this.props.source.soundcloud,
            itunes: this.props.source.itunes,
            hungama: this.props.source.hungama,
            gaana: this.props.source.gaana,
            saavn: this.props.source.saavn,
            amazon: this.props.source.amazon,
        };
    }
    render() {
        return (
            <div style={widgetStyles}>
                <p>&nbsp;&nbsp;<FontAwesomeIcon icon="play-circle" title="Play by clicking links from one of the options on the right" />&nbsp;&nbsp;{this.state.title + " (Singer: " + this.state.singer + ") "}</p>
                <ul style={controlStyles}>
                    {checkDisplay(this.state.soundcloud) && <li><a href={this.state.soundcloud} rel="noopener noreferrer" target="_blank" style={{textDecoration: "none", color: "grey"}}><FontAwesomeIcon icon={["fab", "soundcloud"]} />&nbsp;&nbsp;</a></li>}
                    {checkDisplay(this.state.itunes) && <li><a href={this.state.itunes} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "grey"}}><FontAwesomeIcon icon={["fab", "apple"]} /></a>&nbsp;&nbsp;</li>}
                    {checkDisplay(this.state.amazon) && <li><a href={this.state.amazon} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "grey"}}><FontAwesomeIcon icon={["fab", "amazon"]} /></a>&nbsp;&nbsp;</li>}
                    {checkDisplay(this.state.hungama) && <li><a href={this.state.hungama} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "grey"}}>Hungama</a>&nbsp;&nbsp;</li>}
                    {checkDisplay(this.state.gaana) && <li><a href={this.state.gaana} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "grey"}}>Gaana</a>&nbsp;&nbsp;</li>}
                    {checkDisplay(this.state.saavn) && <li><a href={this.state.saavn} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "grey"}}>Saavn</a>&nbsp;&nbsp;</li>}
                </ul>
            </div>
        );
    }
}

const checkDisplay = (brand) => brand ? true : false;

const widgetStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginBottom: "4px"
};

const controlStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    alignItems: "center",
    listStyle: "none"
}
export default AudioWidget;