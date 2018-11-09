import React, { Component } from "react";
import filler from "../constants/fillers";
import "../../css/NewsPageView.css";

class NewsPageView extends Component {
    render() {
        return (
            <div className="news-page-view">
                <h1>{filler.SENTENCE}</h1>
                <img src={filler.THUMBNAIL_IMG} alt="news" width="320px" height="180px" />
                <p>{filler.PARA}</p>}
                <h1>{filler.SENTENCE}</h1>
                <img src={filler.THUMBNAIL_IMG} alt="news" width="320px" height="180px" />
                <p>{filler.PARA}</p>}
                <h1>{filler.SENTENCE}</h1>
                <img src={filler.THUMBNAIL_IMG} alt="news" width="320px" height="180px" />
                <p>{filler.PARA}</p>} 
            </div>
        );
    }
}

export default NewsPageView;