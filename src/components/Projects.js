import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components'

import NavContentA from "./styles/elements/NavContentA";

const fade = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`

const FadeAnimation = styled.div`
  animation: ${fade} .3s;
`
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

  showProjects = () => {
    this.props.onClick('projects')
  }

  render() {
  
    let urls = this.state.urls

    return (
      <div>
        <ul className="nav-projects_url">
            {
              Object.keys(urls).map((url, idx) => (
                <FadeAnimation 
                  key={idx}
                >
                  <NavContentA 
                    href={ urls[url] } 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url}
                  </NavContentA>
                </FadeAnimation>
              ))
            }
        </ul>
      </div>
    );
  }
}

export default Projects;