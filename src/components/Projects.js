import React, { Component } from 'react';

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
    if(this.state.showing){
      return ( 
      <ul>
          {
            Object.keys(urls).map((url, idx) => (
              <li 
                key={idx}
              >
                <a 
                  href={ urls[url] } 
                  target="_blank"
                >
                  {url}
                </a>
              </li>
            ))
          }
      </ul>
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
        <h1 onClick={this.showProjects}>Projects</h1>
        { this.isShowing() }
      </div>
    );
  }
}

export default Projects;