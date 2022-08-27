// General.js

import React, { Component } from 'react';

class General extends Component {
  render(){
    //console.log(this.props.generalInfoArray)
    return (
      <div>
         {this.props.generalInfoArray.map((generalInfo) => {
        return <li key={generalInfo.id}>{generalInfo.text} 
        </li>;})}
      </div>
    )
  }
}
export default General