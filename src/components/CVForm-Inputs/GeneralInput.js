// GeneralInput.js

import React, { Component } from "react";
import General from "../CVForm-Render/General";
import uniqid from "uniqid";

class GeneralInput extends Component {
    constructor() {
        super();

        this.state = {
            generalInfo: 0,
            // generalInfoArray: []
        }
    }
    
    // handleChange = (e) => {
    //   this.setState({
    //     generalInfo : {
    //       name: e.target.value,
    //       id: this.state.generalInfo.id,
    //     }
    //   });
    // };

    // onSubmitTask = (e) => {
    //   e.preventDefault();
    //   this.setState({
    //     generalInfoArray: this.state.generalInfoArray.concat(this.state.generalInfo),
    //     generalInfo: { name: '',
    //             id: uniqid()
    //           },
    //   });
    // };

    render() {

      return (
        <div>
          <General generalInfo={this.state.generalInfo} />
        </div>
      )
}
}

export default GeneralInput