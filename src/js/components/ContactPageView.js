import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import "../../css/ContactPageView.css";

class ContactPageView extends Component {
    constructor(props) {
        super(props);
        this.contact_number = null;
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm("gmail_applylab", "contact_form", "#contact-form")
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
            }, function (err) {
                console.log("FAILED...", err);
            });
    }
    render() {
        return (
            <div className="contact-page-view">
                <h1 style={{ textAlign: "center" }}>Contact Us</h1>
                <form id="contact-form" onSubmit={this.handleFormSubmit}>
                    <input type="hidden" name="contact_number" ref={c => (this.contact_number = c)} />
                    <label htmlFor="user_name">Name</label>
                    <input id="user_name" type="text" name="user_name" />
                    <label htmlFor="user_email">Email</label>
                    <input id="user_email" type="email" name="user_email" />
                    <label htmlFor="contact">Message</label>
                    <textarea id="text" name="text"></textarea>
                    <div className="g-recaptcha" data-sitekey="6LeHoXkUAAAAAARqXmFJZR_9SfZRTH8nDaetTLXR"></div>
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}

export default ContactPageView;