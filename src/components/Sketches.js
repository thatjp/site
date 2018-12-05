import React, { Component } from 'react';
import NavContentP from './styles/elements/NavContentP';
import FadeAnimation from './styles/elements/FadeAnimation'
class Sketches extends Component {

  render() {
    return (
      <FadeAnimation>
        <NavContentP 
          className="content" 
          pose={this.props.isOpen ? 'open' : 'closed'}
        >
            N/A
        </NavContentP>
      </FadeAnimation>
    );
  }
}

export default Sketches;
