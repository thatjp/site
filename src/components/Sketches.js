import React, { Component } from 'react';

import TitleWrapper from "./styles/elements/TitleWrapper";
import NavContentA from "./styles/elements/NavContentA";
import NavContentP from './styles/elements/NavContentP';

class Sketches extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sketchUrls: {},
      showing: false,
      // isVisable: "visable"
    }
  }
  
  isShowing = () => {
    let sketchUrls = this.state.sketchUrls
    if(this.props.isOpen && Object.keys(sketchUrls).length){
      return ( 
        <ul 
          className='nav-projects_url'
        >
          {
            Object.keys(sketchUrls).map((title, idx) => (
              <li 
                key={idx}
              >
                <NavContentA 
                  href={ sketchUrls[title] } target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </NavContentA>
              </li>
            ))
          }
        </ul>
      )
    } else if (this.props.isOpen){
      return (
          <NavContentP className="content" 
          pose={this.props.isOpen ? 'open' : 'closed'}>
            <div>
              N/A
            </div>
          </NavContentP>
      )
    }
  }

  showSketches = () => {
    this.props.onClick('sketches')
  }

  render() {
    return (
      <div>
        <TitleWrapper 
          onClick={this.showSketches}
        >
          Sketches
        </TitleWrapper>
        { this.isShowing() }
      </div>
    );
  }
}

export default Sketches;
