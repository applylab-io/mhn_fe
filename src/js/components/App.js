import React, {Component} from "react";
import "../../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import * as emailjs from "emailjs-com";
import HomePageView from "./HomePageView";
import PartnersPageView from "./PartnersPageView";
import MusicPageView from "./MusicPageView";
import AboutPageView from "./AboutPageView";
import NewsPageView from "./NewsPageView";
import VideosPageView from "./VideoPageView";
import ContactPageView from "./ContactPageView";
import NoMatch from "./NoMatch";
import filler from "../constants/fillers";

class App extends Component {
    constructor() {
        super();
        emailjs.init(filler.EMAILJS_USERID);
    }
    render() {
        return(
            <Router>
            <div className="app">
                <Header />
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={HomePageView} />
                        <Route path="/partners" component={PartnersPageView} />
                        <Route path="/music" component={MusicPageView} />
                        <Route path="/videos" component={VideosPageView} />
                        <Route path="/news" component={NewsPageView} />
                        <Route path="/about" component={AboutPageView} />
                        <Route path="/contact" component={ContactPageView} />
                        {/* when none of the above match, <NoMatch> will be rendered */}
                        <Route component={NoMatch} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>            
        );
    }
}

export default App;