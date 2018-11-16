import React, { Component } from 'react';

import TitleWrapper from "./styles/elements/TitleWrapper";
import NavContent from "./styles/elements/NavContentA";

class Projects extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      urls: {
        "Redux Example":"https://jp-example.herokuapp.com/",
        "Game of Thrones Map":"https://got-map.herokuapp.com/",
        "Front End Sandbox":"https://front-end-sandbox.herokuapp.com/",
        "ITI Busines Site":"https://iti-co.herokuapp.com/"
      },
      showing: false
    }
  }

  isShowing = () => {
    let urls = this.state.urls
    if(this.props.isOpen){
      return ( 
      <ul className="nav-projects_url">
          {
            Object.keys(urls).map((url, idx) => (
              <li 
                key={idx}
              >
                <NavContent 
                  href={ urls[url] } 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url}
                </NavContent>
              </li>
            ))
          }
      </ul>
      )
    }
  }

  showProjects = () => {
    this.props.onClick('projects')
  }

  render() {
  
    return (
      <div>
        <TitleWrapper 
          onClick={this.showProjects}
        >
          Projects
        </TitleWrapper>
        {this.isShowing()}
      </div>
    );
  }
}

export default Projects;