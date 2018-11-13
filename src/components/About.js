import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false
    }
  }
  
  isShowing = () => {
    if(this.state.showing){
      return ( 
        <p>
          hi I'm JP.
        </p>
      )
    }
  }

  showProjects = () => {
    this.setState({
      showing: !this.state.showing
    })
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

