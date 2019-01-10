import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import ContentWrapper from '../components/ContentWrapper';
import '../reset.css';

const Outer = styled.div`
  display: grid;
  margin: 30px;
  position: relative;
  /* * { outline: solid 0.25rem rgba(10, 10, 10, 0.5); } */
  @media (min-width : 320px) and (max-width : 480px) {
    margin: 15px;
  }
`;

const Column = styled.div`
  grid-column-start: 1;
`;

const Column2 = styled.div`
  grid-column-start: 2;
`;

const Inner = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0;
  position: absolute;
  top: 30px;
  left: 30%;
  -ms-transform: translate(-30%, -30%);
  transform: translate(-30%, -30%);
  @media (min-width : 320px) and (max-width : 480px) {
    width: 100%;
    top: 25%;
  }
`;

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
      },
    };
  }

  handleClick = (name) => {

    const isOpen = this.state.isOpen;

    let isClosedState = Object.assign({}, isOpen);

    if (name === 'projects') {
      isClosedState = {
        projects: !isClosedState.projects,
        sketches: false,
        about: false,
        resume: false,
        contact: false,
      };
      this.setState({ isOpen: isClosedState });
    } else if (name === 'about') {
      isClosedState = {
        projects: false,
        sketches: false,
        about: !isClosedState.about,
        resume: false,
        contact: false,
      };
      this.setState({ isOpen: isClosedState });
    } else if (name === 'sketches') {
      isClosedState = {
        projects: false,
        sketches: !isClosedState.sketches,
        about: false,
        resume: false,
        contact: false,
      };
      this.setState({ isOpen: isClosedState });
    } else if (name === 'resume') {
      isClosedState = {
        projects: false,
        sketches: false,
        about: false,
        resume: !isClosedState.resume,
        contact: false,
      };
      this.setState({ isOpen: isClosedState });
    } else if (name === 'contact') {
      isClosedState = {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
        contact: !isClosedState.contact,
      };
      this.setState({ isOpen: isClosedState });
    }
  }

  openContent = () => {
    const { state } = this.state;
    this.setState({
      contentOpen: !state.contentOpen,
    });
  }

  render() {
    const state = this.state;

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
                resume={state.isOpen.resume}
              />
            </Column>
            <Column2>
              <ContentWrapper
                openContent={state.contentOpen}
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
