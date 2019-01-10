import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Nav from '../components/Nav';
import ContentWrapper from '../components/ContentWrapper';
import {
  GlobalStyle,
  Inner,
  Outer,
  Column,
  Column2,
  theme,
} from './styles';

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
      <ThemeProvider theme={theme}>
        <Outer>
          <GlobalStyle />
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
      </ThemeProvider>
    );
  }
}

export default App;
