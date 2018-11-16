import React, { Component } from 'react';

import TitleWrapper from "./styles/elements/TitleWrapper";

class Resume extends Component {
  render() {
    return (
      <div>
        {/* <a 
         href={require("../assets/jp-harris-resume.pdf")} download
        > */}
          <TitleWrapper>
            Resume
          </TitleWrapper>
        {/* </a> */}
      </div>
    );
  }
}

export default Resume;
