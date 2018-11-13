import React, { Component } from 'react';

import { Document, Page } from 'react-pdf';

class Resume extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      showing: false,
      pageNumber: 1
    }
  }
  
  showProjects = () => {
    this.setState({
      showing: !this.state.showing
    })
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  isShowing = () => {
    const { pageNumber }= this.state
    if(this.state.showing){
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

  render() {
    return (
      <div>
        <div>
          <h1 
            onClick={this.showProjects}
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
