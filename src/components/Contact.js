import React, { Component } from 'react'

import TitleWrapper from './styles/elements/TitleWrapper'
import NavContentA from "./styles/elements/NavContentA";

export default class Contact extends Component {

  isShowing = () => {
    if(this.props.isOpen){
      return (
        <div>
          <NavContentA 
            href="https://github.com/thatjp"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </NavContentA>
          <NavContentA 
            href="https://www.instagram.com/_jpharris_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </NavContentA>
        </div>
      )
    }
  }

  showProjects = () => {
    this.props.onClick('contact')
  }

  render() {
    return (
      <div>
        <TitleWrapper 
          onClick={this.showProjects}
        >
          Contact
        </TitleWrapper>
        {this.isShowing()}
      </div>
    );
  }
}
