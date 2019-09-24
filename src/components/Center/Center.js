import React, { Component } from 'react';

import About from '../About/About';
import ScrollBar from '../ScrollBar/ScrollBar';
import FadeAnimation from '../styles/FadeAnimation';
import TimeLineContent from '../TimeLineContent/TimeLineContent';
import CenterStyles from './styles';
import { projects } from '../../App/timeLineData';

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLineContent: null,
      isProjects: false,
      isAbout: false,
      isContact: false,
      navItem: null,
    };
  }

  renderTimeLineConent = () => {
    const { timeLineContent } = this.state;
    if (timeLineContent === null) {
      return projects.work[0];
    }
    return timeLineContent;
  }

  handleTimeLineClick = (e) => {
    e.preventDefault();
    const { isProjects } = this.props;
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

  render() {
    // const {
    //   isAbout,
    // } = this.state;

    const {
      isProjects,
      navItem,
      isNightColor,
      isAbout,
    } = this.props;

    return (
      <CenterStyles>
        {/* {isAbout ? (
          <div className="section center">
            <About />
          </div>
        ) : ( */}
        <>
          <FadeAnimation>
            <div className="section center">
              <ScrollBar
                title={navItem}
                onTimeLineClick={() => this.handleTimeLineClick}
                nightTime={isNightColor}
                projects={isProjects ? projects.projects : projects.work}
              />
              <TimeLineContent
                timeLineContent={this.renderTimeLineConent()}
                isAbout={isAbout}
              />
            </div>
          </FadeAnimation>
        </>
         {/* )
       } */}
      </CenterStyles>
    );
  }
}

export default Center;
