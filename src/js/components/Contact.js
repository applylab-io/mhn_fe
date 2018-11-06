import React, { Component } from "react";
import uuidv1 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contacts = [
    {
        name: "envelope",
        target: "mailto:mailmusichub@gmail.com"
    }
];

class Contact extends Component {
    render() {
        return (
            <ul style={baseStyle}>
                {contacts.map(el => (
                    <li key={uuidv1()} style={{marginLeft: '20%', marginRight: '20%'}}>
                        <a href={el.target} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'grey'}}><FontAwesomeIcon icon={el.name} /></a>
                    </li>
                ))}
            </ul>
        );
    }
}

const baseStyle = {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: "x-large",
    paddingInlineStart: '0px'
};

export default Contact;