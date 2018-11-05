import React from "react";
import "../../css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePageView from "./HomePageView";
import PartnersPageView from "./PartnersPageView";
import MusicPageView from "./MusicPageView";
import AboutPageView from "./AboutPageView";
import NewsPageView from "./NewsPageView";
import VideosPageView from "./VideoPageView";
import ContactPageView from "./ContactPageView";
import NoMatch from "./NoMatch";

const App = () => (
    <Router>
        <div className='app'>
            <Header />
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
            <Footer />
        </div>
    </Router>
);

export default App;