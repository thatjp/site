import React, { Component } from 'react';

class About extends Component {

  isShowing = () => {
    if(this.props.isOpen){
      return ( 
        <p>
          hi I'm JP.
        </p>
      )
    }
  }

  showProjects = () => {
    this.props.onClick('about')
  }

  render() {
    return (
      <div>
        <h1 onClick={this.showProjects}>About</h1>
        {this.isShowing()}
      </div>
    );
  }
}

export default About;

