import React, { Component } from 'react';

import TitleWrapper from './styles/elements/TitleWrapper'
import NavContentP from "./styles/elements/NavContentP";

class About extends Component {

  isShowing = () => {
    if(this.props.isOpen){
      return ( 
        <NavContentP>
          hi I'm JP.
        </NavContentP>
      )
    }
  }

  showProjects = () => {
    this.props.onClick('about')
  }

  render() {
    return (
      <div>
        <TitleWrapper 
          onClick={this.showProjects}
        >
          About
        </TitleWrapper>
        {this.isShowing()}
      </div>
    );
  }
}

export default About;

