import React, { Component } from 'react';

import TitleWrapper from "./styles/elements/TitleWrapper";
import NavContentA from "./styles/elements/NavContentA";

class Resume extends Component {
  render() {
    return (
      <div>
        <NavContentA
         href={require("../assets/jp-harris-resume.pdf")} 
         download
         target="_blank"
         rel="noopener noreferrer"
         resume
        >
          <TitleWrapper>
            Resume
          </TitleWrapper>
        </NavContentA>
      </div>
    );
  }
}

export default Resume;
