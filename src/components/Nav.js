import React, { Component } from 'react';

import Projects from './Projects'
import Sketches from './Sketches'
import Resume from './Resume'
import About from './About'
import Contact from './Contact'

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
        contact: false
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "about") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: !isClosedState.about,
        resume: false,
        contact: false
      }
      this.setState({isOpen: isClosedState})    
    } else if (name === "sketches") {
      isClosedState = {
        projects: false,
        sketches: !isClosedState.sketches,
        about: false,
        resume: false,
        contact: false,
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "resume") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: false,
        resume: !isClosedState.resume,
        contact: false,
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "contact") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
        contact: !isClosedState.contact,
      }
      this.setState({isOpen: isClosedState})
    }
    
  }

  render() {
    const isOpen = this.state.isOpen
    return (
      <div>
        <About 
          isOpen={isOpen.about}
          onClick={this.handleClick}
        />
        <Projects 
          isOpen={isOpen.projects}
          onClick={this.handleClick}
        />
        <Sketches 
          isOpen={isOpen.sketches}
          onClick={this.handleClick}
        />
        <Contact 
          isOpen={isOpen.contact}
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