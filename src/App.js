import React, { Component } from 'react';
import styled from 'styled-components'
import Nav from './components/Nav';
import ContentWrapper from './components/ContentWrapper'
import './reset.css';

const Outer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 200px;
  position: relative;
`

const Column = styled.div`
  grid-column-start: 1;
`

const Column2 = styled.div`
  grid-column-start: 2;
`

const Inner = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 30%;
  -ms-transform: translate(-30%, -30%);
  transform: translate(-30%, -30%);
`
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentOpen: false,
      isOpen: {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
      }
    }
  }

  handleClick = (name) => {

    let isClosedState = Object.assign({}, this.state.isOpen)

    if (name === "projects") {      
      isClosedState = {
        projects: !isClosedState.projects,
        sketches: false,
        about: false,
        resume: false,
        contact: false
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "about") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: !isClosedState.about,
        resume: false,
        contact: false
      }
      this.setState({isOpen: isClosedState})    
    } else if (name === "sketches") {
      isClosedState = {
        projects: false,
        sketches: !isClosedState.sketches,
        about: false,
        resume: false,
        contact: false,
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "resume") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: false,
        resume: !isClosedState.resume,
        contact: false,
      }
      this.setState({isOpen: isClosedState})
    } else if (name === "contact") {
      isClosedState = {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
        contact: !isClosedState.contact,
      }
      this.setState({isOpen: isClosedState})
    }
    
  }

  openContent = () => {
    this.setState({
      contentOpen: !this.state.contentOpen
    })
  }

  render() {
    const state = this.state
    return (
      <div>
        <Outer>
          <Inner>
          <Column>
            <Nav 
              openContent={this.openContent} 
              onClick={this.handleClick}
              about={state.isOpen.about}
              projects={state.isOpen.projects}
              sketches={state.isOpen.sketches}
            />
          </Column>
          <Column2>
            <ContentWrapper 
              openContent={this.state.contentOpen}
              isOpen={state.isOpen}
            />
          </Column2>
          </Inner>
        </Outer>
      </div>
    );
  }
}

export default App;