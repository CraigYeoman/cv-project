// General.js

import React, { Component } from 'react';

class General extends Component {
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
export default General