// Main.js

import React, { Component } from 'react';
import GeneralInput from './CVForm-Inputs/GeneralInput';
import EducationInput from './CVForm-Inputs/EducationInput';
import ExperienceInput from './CVForm-Inputs/ExperienceInput';

class Main extends Component {
    render() {
        return (
            <div>
                <GeneralInput />
                <EducationInput />
                <ExperienceInput />
            </div>
        )
    }
}

export default Main;