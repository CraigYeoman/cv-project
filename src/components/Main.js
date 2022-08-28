// Main.js

import React, { Component } from 'react';
import GeneralInput from './CVForm-Inputs/GeneralInput';
import General from "./CVForm-Render/General";
import EducationInput from './CVForm-Inputs/EducationInput';
import Education from "./CVForm-Render/Education"
// import ExperienceInput from './CVForm-Inputs/ExperienceInput';

class Main extends Component {
    constructor(props) {
       super(props);

       this.state = {
        name: '',
        email: '',
        phoneNumber: '',
        education : {
            school: ''
        }
       }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          })
      }

    handleChangeEducation = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            education: {
              ...prevState.education,
              [event.target.name]: event.target.value
            }
          }))
    }
    
    render() {
        
         const {name, email, phoneNumber, education } = this.state;
        return (
            <div>
                <GeneralInput 
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                    handleChange={this.handleChange}
                />
                <EducationInput 
                    school={education.school}
                    handleChangeEducation={this.handleChangeEducation}
                />
                {/* <ExperienceInput /> */}
                <General 
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                />
                <Education />
                
            </div>
        )
    }
};

export default Main;