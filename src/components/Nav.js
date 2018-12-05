import React from 'react';
import styled from 'styled-components'

import Projects from './Projects'
import Sketches from './Sketches'
import Resume from './Resume'
import About from './About'
import Contact from './Contact'
import TitleWrapper from "./styles/elements/TitleWrapper";

const NavItemWrapper = styled.div`
  display: inline;
`


const Nav = (props) => {

  const showProjects = (itemName) => {
    props.onClick('projects')

    switch (itemName) {
      case 'projects':
        props.onClick('projects')
      break;
      case 'about':
        props.onClick('about')
      break;
      case 'sketches':
        props.onClick('sketches')
      break;
      case 'contact':
        props.onClick('contact')
      break;  
      case 'resume':
        props.onClick('resume')
      break;      
      default:
        break;
    }
  }

    return (
      <div>
        <NavItemWrapper>
          <TitleWrapper 
            onClick={() => showProjects('about')}
          >
            About
          </TitleWrapper>
        </NavItemWrapper>
        <NavItemWrapper>
          <TitleWrapper 
            onClick={() => showProjects('projects')}
          >
            Projects
          </TitleWrapper>
        </NavItemWrapper>
        <NavItemWrapper>
          <TitleWrapper 
            onClick={() => showProjects('sketches')}
          >
            Sketches
          </TitleWrapper>
        </NavItemWrapper>
        <NavItemWrapper>
          <TitleWrapper 
            onClick={() => showProjects('contact')}
          >
            Contact
          </TitleWrapper>
        </NavItemWrapper>
        <NavItemWrapper>
        <TitleWrapper 
            onClick={() => showProjects('resume')}
          >
            Resume
          </TitleWrapper>
        </NavItemWrapper>
      </div>
    );
  }

export default Nav;