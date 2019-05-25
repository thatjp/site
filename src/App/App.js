import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Nav from '../components/Nav/Nav';
import ColorShift from '../components/ColorShift/ColorShift';
import About from '../components/About/About';
import TimeLineContent from '../components/TimeLineContent/TimeLineContent';
import ScrollBar from '../components/ScrollBar/ScrollBar';
import { GlobalStyle, AppStyles, theme } from './styles';
import projects from './timeLineData';

const ContentDescriptionText = 'CONTENT DESCRIPTION TEXT CONTENT DESCRIPTION TEXT CONTENT DESCRIPTION TEXT CONTENT DESCRIPTION TEXT CONTENT DESCRIPTION TEXT CONTENT DESCRIPTION TEXT CONTENT DESCRIPTION TEXT';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentOpen: false,
      isNightColor: true,
      isOpen: {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
      },
      timeLineContent: null,
    };
  }

  renderTimeLineConent = () => {
    const { timeLineContent } = this.state;

    if (timeLineContent === null) {
      return projects.work[0];
    }
    return timeLineContent;
  }

  openContent = () => {
    const { state } = this.state;
    this.setState({
      contentOpen: !state.contentOpen,
    });
  };

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
    const item = projects.work.filter(job => (
      job.name === e.target.name));

    this.setState({
      timeLineContent: item,
    });
  }

  render() {
    const {
      isOpen,
      contentOpen,
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
            />
          </div>
          <div className="section center">
            <ScrollBar
              onTimeLineClick={() => this.handleTimeLineClick}
              nightTime={isNightColor}
              projects={projects}
            />
            <TimeLineContent
              timeLineContent={this.renderTimeLineConent()}
              descriptionText={ContentDescriptionText}
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
