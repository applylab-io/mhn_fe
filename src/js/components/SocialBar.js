import React, { Component } from "react";
import uuidv1 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const channels = [
    {
        name: "facebook",
        target: "https://www.facebook.com/musichubHindi/"
    },
    {
        name: "youtube",
        target: "https://www.youtube.com/channel/UCcbgNbNj8Zhf4WvWHaGZBpQ"
    },
    ,
    {
        name: "apple",
        target: "javscript:void()"
    },
    {
        name: "google",
        target: "javscript:void()"
    }
    ,
    {
        name: "amazon",
        target: "javscript:void()"
    }
];

class SocialBar extends Component {
    render() {
        return (
            <ul style={channelStyle}>
                {channels.map(el => (
                    <li key={uuidv1()} style={{marginLeft: '15%', marginRight: '15%'}}>
                        <a href={el.target} target="_blank" style={{textDecoration: 'none', color: 'grey'}}><FontAwesomeIcon icon={['fab', el.name]} /></a>
                    </li>
                ))}
            </ul>
        );
    }
}

const channelStyle = {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: "large",
    paddingInlineStart: '0px'
};

export default SocialBar;