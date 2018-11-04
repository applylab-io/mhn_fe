import React from "react";
import List from "./List";
import Form from "./Form";
import YoutubePlayer from "./YoutubePlayer";
import Playlist from "./Playlist";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPlayCircle);

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
    }
];

const soundcloudPlaylist = [
    {
        source: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/218907323&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
        source: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/161934289&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    },
    {
        source: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/207955468&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    }        
];

const audioPlaylist = [
    {
        title: 'Maa Ka Satkaar',
        hungama: 'http://www.hungama.com/song/maa-ka-satkar/41006459/',
        gaana: 'https://gaana.com/album/maa-ka-satkar'
    },
    {
        title: 'Weed Song - Single',
        itunes: 'https://itunes.apple.com/us/album/weed-song-single/1372070974',
        amazon: 'https://www.amazon.com/Weed-Song-Vinay-Mojes/dp/B07C5L6VVL'
    },
    {
        title: 'Ajab Hai Shaan Nirali Si',
        amazon: 'https://www.amazon.com/%E0%A4%85%E0%A4%9C%E0%A4%AC-%E0%A4%B9%E0%A5%88-%E0%A4%B6%E0%A4%BE%E0%A4%A8-%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A4%BE%E0%A4%B2%E0%A5%80-%E0%A4%B8%E0%A5%80/dp/B07B538RMS',
        saavn: 'https://www.saavn.com/album/%E0%A4%85%E0%A4%9C%E0%A4%AC-%E0%A4%B9%E0%A5%88-%E0%A4%B6%E0%A4%BE%E0%A4%A8-%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A4%BE%E0%A4%B2%E0%A5%80-%E0%A4%B8%E0%A5%80/2gCL4L3J9nE_'
    }    
];

const App = () => (
    <div style={baseStyle}>   
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div> 
        <div>
            <h2>Articles</h2>
            <List />
        </div>
        <div>
            <h2>Featured</h2>
            <YoutubePlayer scale="3" />
        </div>
        <div>
            <Playlist type="youtube" title="Youtube Playlist" playlist={youtubePlaylist} />
        </div>
        <div>
            <Playlist type="audio" title="Audio Playlist" playlist={audioPlaylist} />
        </div>
        <div>
            <Playlist type="soundcloud" title="Soundcloud Playlist" playlist={soundcloudPlaylist} />
        </div>
    </div>
);

const baseStyle = {
    display:  'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

export default App;