// General.js

import React, { Component } from 'react';

class General extends Component {
  render(){
    
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.phoneNumber}</li>
        <li>{this.props.email}</li>
      </ul>
    )
  }
}
export default General