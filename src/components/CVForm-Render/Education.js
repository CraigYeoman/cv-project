// Education.js

import React, { Component } from 'react';
import uniqid from "uniqid";

class Education extends Component {
    render() {
        return (
            <div>
                    {this.props.educationArray.map((items) => {
                        return (           
                        <ul key={uniqid()}>
                            <li key={items.id}>{items.school}</li>
                            <li key={uniqid()}>{items.degree}</li>
                            <li key={uniqid()}>{items.graduationDate}</li>
                            <button id={items.id} onClick={this.props.deleteEducationItem}>Remove</button>
                        </ul>
                    )})}
            </div>
        )
    }
}

export default Education