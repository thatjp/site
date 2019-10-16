import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import isMobile from 'ismobilejs';

import Nav from '../components/Nav/Nav';
import ColorShift from '../components/ColorShift/ColorShift';
import Center from '../components/Center/Center';

import { GlobalStyle, AppStyles, theme } from './styles';

import store from '../redux/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNightColor: true,
      userAgent: null,
      whichNavItemOpen: 'about',
      isProjects: false,
      isAbout: false,
      isContact: false,
      navItem: null,
    };
  }

  componentDidMount() {
    const { userAgent } = navigator.userAgent;
    this.setState({
      userAgent,
    });
  }

  handleColorShiftClick = (isNightTime) => {
    if (isNightTime) {
      this.setState({
        isNightColor: true,
      });
    } else {
      this.setState({
        isNightColor: false,
      });
    }
  }

  handleProjectsClick = () => {
    const { isProjects } = this.state;
    this.setState({
      isProjects: !isProjects,
    });
  };

  handleAboutClick = () => {
    const { isAbout } = this.state;
    this.setState({
      isAbout: !isAbout,
    });
  };

  handleContactClick = () => {
    const { isContact } = this.state;
    this.setState({
      isContact: !isContact,
    });
  };

  handleNavClick = (e) => {
    this.setState({
      whichNavItemOpen: e.target.innerHTML.toLowerCase(),
    });
  }

  renderTimeline = (projectsData) => {
    const { whichNavItemOpen } = this.state;

    switch (whichNavItemOpen) {
      case 'projects':
        return projectsData.projects;
      case 'work':
        return projectsData.work;
      default:
        return null;
    }
  };

  detectMobile = userAgent => (
    isMobile(userAgent).any
  );

  render() {
    const {
      isProjects,
      isNightColor,
      isAbout,
      isContact,
      navItem,
      userAgent,
      whichNavItemOpen
    } = this.state;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppStyles
            mobile={this.detectMobile(userAgent)}
          >
            <GlobalStyle
              nightTime={isNightColor}
            />
            {this.detectMobile(userAgent) ? (
              <div className="section top">
                <Nav
                  nightTime={isNightColor}
                  handleProjectsClick={() => this.handleProjectsClick}
                  handleAboutClick={() => this.handleAboutClick}
                  handleContactClick={() => this.handleContactClick}
                  isMobile={this.detectMobile(userAgent)}
                />
              </div>
            ) : (
              <div className="section left">
                <Nav
                  nightTime={isNightColor}
                  handleProjectsClick={() => this.handleProjectsClick}
                  handleAboutClick={() => this.handleAboutClick}
                  handleContactClick={() => this.handleContactClick}
                  whichNavItemOpen={whichNavItemOpen}
                  isMobile={this.detectMobile(userAgent)}
                  handleNavClick={() => this.handleNavClick}
                />
                <ColorShift
                  handleColorShiftClick={bool => this.handleColorShiftClick(bool)}
                />
              </div>
            )
            }
            <div className="section center">
              <Center
                whichNavItemOpen={whichNavItemOpen}
                isAbout={isAbout}
                isContact={isContact}
                isProjects={isProjects}
                renderTimeline={() => this.renderTimeline()}
                navItem={navItem}
                isNightCol={isNightColor}
                isNightColor={isNightColor}
                isMobile={this.detectMobile(userAgent)}
              />
            </div>
          </AppStyles>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
