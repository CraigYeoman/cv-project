// GeneralInput.js
// https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/
// https://shipshape.io/blog/react-objects-and-state/
import React from "react";
//import General from "../CVForm-Render/General";
//import uniqid from "uniqid";

const GeneralInput = (props) => {
  return (
    <div>          
      General Info Input
      <input
        name='name' 
        placeholder='Name'
        value={props.name}
        onChange={props.handleChange}
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


export default GeneralInput