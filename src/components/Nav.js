import React, { Component } from 'react';

import Projects from './Projects'
import Sketches from './Sketches'
import Resume from './Resume'
import About from './About'

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClosed: {
        projects: true,
        sketches: true,
        resume: true,
        about: true
      }
    }
  }

  showProjects = (name) => {

    if (name === 'projects') {
      this.setState({
        isClosed: !this.state.isClosed.projects
      })
    }
  }

  render() {
    const isClosed = this.state.isClosed

    return (
      <div 
        // className="nav" 
        // style={NavStyle}
      >
          <Projects 
            isClosed={isClosed.projects} 
          />
          <Sketches 
            isClosed={isClosed.sketches}
          />
          <Resume 
            isClosed={isClosed.resume}
          />
          <About 
            isClosed={isClosed.about}
          />
      </div>
    );
  }
}

export default Nav;