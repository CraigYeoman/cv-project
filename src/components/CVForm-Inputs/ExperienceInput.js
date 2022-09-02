// ExperienceInput.js

import React from 'react';
import { createRoot } from 'react-dom/client';

const ExperienceInput = (props) => {
  
  const container = document.getElementById('experienceForm');
  const root = createRoot(container);
  const addResponsibility = (props) => {
    const responsibilty = (
        <input
        name='responsibilities' 
        placeholder='Responsibility'
        value={props.responsibilities}
        onChange={props.handleChangeExperience}
        id='responsibilty'
      /> 
    )
    root.render(responsibilty)
}  
  
  return (
        <div>          
          Experience Info Input
          <form onSubmit={props.onSubmitExperience} id='experienceForm'>
            <input
              name='jobTitle' 
              placeholder='Job Title'
              value={props.jobTitle}
              onChange={props.handleChangeExperience}
            />
            <input
              name='startDate' 
              placeholder='Start Date'
              value={props.startDate}
              onChange={props.handleChangeExperience}
            /> 
            <input
              name='endDate' 
              placeholder='End Date'
              value={props.endDate}
              onChange={props.handleChangeExperience}
            />
            <input
              name='responsibilities' 
              placeholder='Responsibility'
              value={props.responsibilities}
              onChange={props.handleChangeExperience}
              id='responsibilty'
            />
            <button onClick={addResponsibility}>
              Add another responsibilty
            </button>
            <button type="submit">
              Submit
            </button>
            </form>               
        </div>
        
    )
}

export default ExperienceInput;