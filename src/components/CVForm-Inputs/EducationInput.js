// EducationInput.js

import React from 'react';

const EducationInput = (props) => {
    return (
        <div>          
          Education Info Input
          <form onSubmit={props.onSubmitEducation}>
            <input
              name='school' 
              placeholder='School'
              value={props.school}
              onChange={props.handleChangeEducation}
            />
            <input
              name='degree' 
              placeholder='Degree'
              value={props.degree}
              onChange={props.handleChangeEducation}
            /> 
            <input
              name='graduationDate' 
              placeholder='Graducation Date'
              value={props.graduationDate}
              onChange={props.handleChangeEducation}
            />
            <button type="submit">
              Submit
            </button>
            </form>               
        </div>
    )
}

export default EducationInput;