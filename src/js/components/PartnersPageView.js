import React, { Component } from "react";
import filler from "../constants/fillers";
import "../../css/PartnersPageView.css";

class PartnersPageView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partners: filler.PARTNERS
        }
    }
    componentDidMount() {
        this.setState({
            partners: filler.PARTNERS
        });
    }
    render() {
        return (
            <div className="partners-page-view">
                <h1>Our Media Partners</h1>
                <div className="partners">
                    {
                        this.state.partners.map((partner, index) =>
                            <img src={partner.logo} alt={partner.brand} key={index} width="320px" height="auto" />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default PartnersPageView;