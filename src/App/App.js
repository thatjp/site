import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import isMobile from 'ismobilejs';
import About from '../components/About/About';
import Nav from '../components/Nav/Nav';
import ColorShift from '../components/ColorShift/ColorShift';
import Center from '../components/Center/Center';

import { GlobalStyle, AppStyles, theme } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNightColor: true,
      userAgent: null,
      whichNavItemOpen: 'about',
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

  handleNavClick = (e) => {
    this.setState({
      whichNavItemOpen: e.target.innerHTML.toLowerCase(),
    });
  }

  detectMobile = userAgent => (
    isMobile(userAgent).any
  );

  render() {
    const {
      isNightColor,
      navItem,
      userAgent,
      whichNavItemOpen,
    } = this.state;

    return (
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
              navItem={navItem}
              isNightCol={isNightColor}
              isNightColor={isNightColor}
              isMobile={this.detectMobile(userAgent)}
            />
            <Switch>
              <Route
                exact
                path={['/about', '/work', '/projects', '/contact']}
                render={props => (
                  <Center
                    {...props}
                  />
                )}
              />
            </Switch>
          </div>
        </AppStyles>
      </ThemeProvider>
    );
  }
}

export default App;
