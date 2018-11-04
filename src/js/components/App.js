import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import YoutubePlayer from "./YoutubePlayer";
import Playlist from "./Playlist";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faMusic, faExclamationTriangle, faShareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPlayCircle, faMusic, faExclamationTriangle, faShareAlt, faEnvelope);

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

const audioPlaylist = [
    {
        title: 'Maa Ka Satkaar',
        hungama: 'http://www.hungama.com/song/maa-ka-satkar/41006459/',
        gaana: 'https://gaana.com/album/maa-ka-satkar',
        singer: 'Onkar Minhas'
    },
    {
        title: 'Weed Song - Single',
        itunes: 'https://itunes.apple.com/us/album/weed-song-single/1372070974',
        amazon: 'https://www.amazon.com/Weed-Song-Vinay-Mojes/dp/B07C5L6VVL',
        singer: 'Vinay Mojes'
    },
    {
        title: 'Ajab Hai Shaan Nirali Si',
        amazon: 'https://www.amazon.com/%E0%A4%85%E0%A4%9C%E0%A4%AC-%E0%A4%B9%E0%A5%88-%E0%A4%B6%E0%A4%BE%E0%A4%A8-%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A4%BE%E0%A4%B2%E0%A5%80-%E0%A4%B8%E0%A5%80/dp/B07B538RMS',
        saavn: 'https://www.saavn.com/album/%E0%A4%85%E0%A4%9C%E0%A4%AC-%E0%A4%B9%E0%A5%88-%E0%A4%B6%E0%A4%BE%E0%A4%A8-%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A4%BE%E0%A4%B2%E0%A5%80-%E0%A4%B8%E0%A5%80/2gCL4L3J9nE_',
        singer: 'Ashish Donald ft. Javed Ali'
    }    
];

const App = () => (
    <div style={baseStyle}>
        <Header />
        <YoutubePlayer scale="3" source="https://www.youtube.com/embed/ELVYcEPIKJg" />
        <Playlist type="youtube" title="Watch more" playlist={youtubePlaylist} />
        <Playlist type="audio" title="Listen to your favorite tracks" playlist={audioPlaylist} />
        <Footer />
    </div>
);

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap', 
    width: '100%',
    maxWidth: '100%'
};

export default App;