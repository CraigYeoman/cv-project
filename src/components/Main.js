// Main.js

import React, { Component } from 'react';

import GeneralInput from './CVForm-Inputs/GeneralInput';
import General from "./CVForm-Render/General";
import EducationInput from './CVForm-Inputs/EducationInput';
import Education from "./CVForm-Render/Education";
import ExperienceInput from './CVForm-Inputs/ExperienceInput';
import Experience from "./CVForm-Render/Experience";
import uniqid from "uniqid";

class Main extends Component {
    constructor(props) {
       super(props);

       this.state = {
        name: '',
        email: '',
        phoneNumber: '',
        education : {
            school: '',
            degree: '',
            graduationDate: '',
            id: uniqid()
        },
        educationArray: [],
        experience : {
            jobTitle: '',
            startDate: '',
            endDate: '',
            responsibilities: [],
            id: uniqid()
        },
        experienceArray: []
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

    onSubmitEducation = (event) => {
        event.preventDefault();
        this.setState({
            educationArray: this.state.educationArray.concat(this.state.education),
            education: {
                school: '',
                degree: '',
                graduationDate: '',
                id: uniqid()
            }
        })
    }

    deleteEducationItem = (event) => {
        this.setState({
            educationArray: this.state.educationArray.filter(item => item.id !== event.target.id)
        })
    }

    handleChangeExperience = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            experience: {
              ...prevState.experience,
              [event.target.name]: event.target.value
            }
          }))
    }

    onSubmitExperience = (event) => {
        event.preventDefault();
        this.setState({
            experienceArray: this.state.experienceArray.concat(this.state.experience),
            experience: {
                jobTitle: '',
                startDate: '',
                endDate: '',
                responsibilities: [],
                id: uniqid()
            }
        })
    }

    

    deleteExperienceItem = (event) => {
        this.setState({
            experienceArray: this.state.experienceArray.filter(item => item.id !== event.target.id)
        })
    }

    render() {
        
         const {name, email, phoneNumber, education, educationArray, experience, experienceArray } = this.state;
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
                    degree={education.degree}
                    graduationDate={education.graduationDate}
                    handleChangeEducation={this.handleChangeEducation}
                    onSubmitEducation={this.onSubmitEducation}
                />
                <ExperienceInput
                    jobTitle={experience.jobTitle}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    handleChangeExperience={this.handleChangeExperience}
                    onSubmitExperience={this.onSubmitExperience}
                    addResponsibility={this.addResponsibility}
                />
                <General 
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                />
                <Education
                    school={education.school}
                    degree={education.degree}
                    graduationDate={education.graduationDate}
                    educationArray={educationArray}
                    deleteEducationItem={this.deleteEducationItem}
                />
                <Experience
                    jobTitle={experience.jobTitle}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                    responsibilities={experience.responsibilities}
                    experienceArray={experienceArray}
                    deleteExperienceItem={this.deleteExperienceItem}
                />
            </div>
        )
    }
};

export default Main;