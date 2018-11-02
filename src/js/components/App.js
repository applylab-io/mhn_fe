import React from "react";
import List from "./List";
import Form from "./Form";
import YoutubePlayer from "./YoutubePlayer";

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
            <h2>Youtube Player</h2>
            <YoutubePlayer />
        </div>
    </div>
);

const baseStyle = {
    display:  'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

export default App;