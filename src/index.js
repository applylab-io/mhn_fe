import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle, faMusic, faExclamationTriangle, faShareAlt, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPlayCircle, faMusic, faExclamationTriangle, faShareAlt, faEnvelope, faBars);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);