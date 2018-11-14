import React, { Component } from 'react';

class Sketches extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      sketchUrls: {
        "google": "https://google.com",
        "goldi": "https://goldi.com",
        "reddit": "https://reddit.com",
        "google 2": "https://google.com",
        "google 3": "https://googdafsdfadgale.com"
      },
      showing: false
    }
  }
  
  isShowing = () => {
    let sketchUrls = this.state.sketchUrls
    if(this.props.isOpen){
      return ( 
        <ul 
          className='nav-projects_url'
        >
          {
            Object.keys(sketchUrls).map((title, idx) => (
              <li 
                key={idx}
              >
                <a 
                  href={ sketchUrls[title] } target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
              </li>
            ))
          }
        </ul>
      )
    }
  }

  showSketches = () => {
    this.props.onClick('sketches')
  }

  render() {
    return (
      <div>
        <h1 
          onClick={this.showSketches}
        >
            Sketches
        </h1>
        { this.isShowing() }
      </div>
    );
  }
}

export default Sketches;
