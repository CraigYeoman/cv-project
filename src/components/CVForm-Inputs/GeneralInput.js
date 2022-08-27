// GeneralInput.js
// https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/
// https://shipshape.io/blog/react-objects-and-state/
import React, { Component } from "react";
import General from "../CVForm-Render/General";
import uniqid from "uniqid";

class GeneralInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
          generalInfo: { name: '',
                         email: '',
                         phoneNumber: '',
                         id: uniqid()
                        },
          generalInfoArray: [],
                        
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    handleChange = (event) => {
      this.setState((prevState) => ({
        ...prevState,
        generalInfo: {
          ...prevState.generalInfo,
          [event.target.name]: event.target.value
        }
    }))
    };

    onSubmit = (e) => {
      const { name, email, phoneNumber, id } = this.state.generalInfo;
      e.preventDefault();
      this.setState({
        generalInfoArray: this.state.generalInfoArray.concat(this.state.generalInfo),
        generalInfo: { name: '',
                      email: '',
                      phoneNumber: '',
                      id: uniqid()
                      },
      });
      console.log(this.state.generalInfoArray )
      alert(`
      ____Your Details____\n
      Name : ${name}
      Email : ${email}
      Phone Number : ${phoneNumber}
      Id : ${id}
    `)
    };

    render() {
      const { generalInfoArray }  = this.state;
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor="name">Enter Name</label>
            <input
              name='name' 
              placeholder='Name'
              value={this.state.generalInfo.name}
              onChange={(e) => this.handleChange(e)}
            />
            <label htmlFor="phoneNumber">Enter Phone Number</label>
            <input
              name='phoneNumber' 
              placeholder='Phone Number'
              value={this.state.generalInfo.phoneNumber}
              onChange={(e) => this.handleChange(e)}
            />
            <label htmlFor="email">Enter email</label>
            <input
              name='email' 
              placeholder='Email'
              value={this.state.generalInfo.email}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit">
              Add Name
            </button>
          </form>
          <General generalInfoArray={generalInfoArray} />
        </div>
      )
}
}

export default GeneralInput