import React, { Component } from 'react';

import { Document, Page } from 'react-pdf';

class Resume extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      pageNumber: 1
    }
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  isShowing = () => {
    const { pageNumber }= this.state
    if(this.props.isOpen){
      return (
        <div>          
          <Document
            file={require("../assets/jp-harris-resume.pdf")}
            onLoadSuccess={this.onDocumentLoad}
            // className='resume-image'
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      )
    }
  }

  showResume = () => {
    this.props.onClick('resume')
  }

  render() {
    return (
      <div>
        <div>
          <h1 
            onClick={this.showResume}
          >
            Resume
          </h1>
        </div>
        <div>
          {this.isShowing()}
        </div>
      </div>
    );
  }
}

export default Resume;
