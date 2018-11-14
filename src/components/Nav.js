import React, { Component } from 'react';

import Projects from './Projects'
import Sketches from './Sketches'
import Resume from './Resume'
import About from './About'

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
      }
    }
  }

  handleClick = (name) => {

    let isClosedState = Object.assign({}, this.state.isOpen)

    if (name === "projects") {      
      isClosedState = {
        projects: !isClosedState.projects,
        sketches: false,
        about: false,
        resume: false,
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "about") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: !isClosedState.about,
        resume: false,
      }
      this.setState({isOpen: isClosedState})    
    } else if (name === "sketches") {
      isClosedState = {
        projects: false,
        sketches: !isClosedState.sketches,
        about: false,
        resume: false,
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "resume") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: false,
        resume: !isClosedState.resume,
      }
      this.setState({isOpen: isClosedState})
    }
  }

  render() {
    const isOpen = this.state.isOpen
    return (
      <div>
        <Projects 
          isOpen={isOpen.projects}
          onClick={this.handleClick}
        />
        <Sketches 
          isOpen={isOpen.sketches}
          onClick={this.handleClick}
        />
        <About 
          isOpen={isOpen.about}
          onClick={this.handleClick}
        />
        <Resume 
          isOpen={isOpen.resume}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Nav;