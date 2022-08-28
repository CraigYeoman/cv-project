// EducationInput.js

import React from 'react';

const EducationInput = (props) => {
    return (
        <div>          
          Education Info Input
          <input
            name='school' 
            placeholder='School'
            value={props.education.school}
            onChange={props.handleChangeEducation}
          />
          <input
            name='phoneNumber' 
            placeholder='Phone Number'
            value={props.phoneNumber}
            onChange={props.handleChange}
          /> 
          <input
            name='email' 
            placeholder='Email'
            value={props.email}
            onChange={props.handleChange}
          />                
        </div>
    )
}

export default EducationInput;