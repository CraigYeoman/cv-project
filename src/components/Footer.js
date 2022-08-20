// Footer.js

import React, { Component} from "react";
import General from "./CVForm/General";
import Education from "./CVForm/Education";
import Experience from "./CVForm/Experience";

class Footer extends Component {
    render() {
         return(    
            <div>
                <General />
                <Education />
                <Experience />
            </div>
        )
    }
}

export default Footer