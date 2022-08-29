// Experience.js

import React, { Component } from 'react';
import uniqid from "uniqid";

class Experience extends Component {
    render() {
        return (
            <div>
                    {this.props.experienceArray.map((items) => {
                        return (           
                        <ul key={uniqid()}>
                            <li key={items.id}>{items.jobTitle}</li>
                            <li key={uniqid()}>{items.startDate}</li>
                            <li key={uniqid()}>{items.endDate}</li>
                            <button id={items.id} onClick={this.props.deleteExperienceItem}>Remove</button>
                        </ul>
                    )})}
            </div>
        )
    }
}

export default Experience