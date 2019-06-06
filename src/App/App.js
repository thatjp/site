import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Nav from '../components/Nav/Nav';
import ColorShift from '../components/ColorShift/ColorShift';
import About from '../components/About/About';
import TimeLineContent from '../components/TimeLineContent/TimeLineContent';
import ScrollBar from '../components/ScrollBar/ScrollBar';
import { GlobalStyle, AppStyles, theme } from './styles';
import { projects } from './timeLineData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNightColor: true,
      isOpen: {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
      },
      timeLineContent: null,
      isProjects: false,
    };
  }

  renderTimeLineConent = () => {
    const { timeLineContent } = this.state;
    if (timeLineContent === null) {
      return projects.work[0];
    }
    return timeLineContent;
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

  handleTimeLineClick = (e) => {
    e.preventDefault();
    const { isProjects } = this.state;
    let item;

    if (isProjects) {
      item = projects.projects.filter(project => (
        project.name === e.target.name));
    } else {
      item = projects.work.filter(job => (
        job.name === e.target.name));
    }

    this.setState({
      timeLineContent: item[0],
    });
  }

  handleProjectsClick = () => {
    const { isProjects } = this.state;
    this.setState({
      isProjects: !isProjects,
    });
  };

  render() {
    const {
      isOpen,
      isProjects,
      isNightColor,
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <AppStyles>
          <GlobalStyle
            nightTime={isNightColor}
          />
          <div className="section left">
            <Nav
              openContent={this.openContent}
              onClick={this.handleClick}
              about={isOpen.about}
              projects={isOpen.projects}
              sketches={isOpen.sketches}
              resume={isOpen.resume}
              nightTime={isNightColor}
              handleProjectsClick={() => this.handleProjectsClick}
            />
          </div>
          <div className="section center">
            <ScrollBar
              title={isProjects ? 'projects' : 'work'}
              onTimeLineClick={() => this.handleTimeLineClick}
              nightTime={isNightColor}
              projects={isProjects ? projects.projects : projects.work}
            />
            <TimeLineContent
              timeLineContent={this.renderTimeLineConent()}
            />
          </div>
          <div className="section right">
            <About />
            <ColorShift
              handleColorShiftClick={bool => this.handleColorShiftClick(bool)}
            />
          </div>
        </AppStyles>
      </ThemeProvider>
    );
  }
}

export default App;
