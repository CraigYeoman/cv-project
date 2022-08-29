// ExperienceInput.js

import React from 'react';

const ExperienceInput = (props) => {
    return (
        <div>          
          Experience Info Input
          <form onSubmit={props.onSubmitExperience}>
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
            <button type="submit">
              Submit
            </button>
            </form>               
        </div>
    )
}

export default ExperienceInput;