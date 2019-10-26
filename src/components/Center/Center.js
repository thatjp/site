import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollBar from '../ScrollBar/ScrollBar';
import { FadeAnimation } from '../styles/FadeAnimation';
import TimeLineContent from '../TimeLineContent/TimeLineContent';
import CenterStyles from './styles';
import { projects } from '../../App/timeLineData';

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLineContent: [],
    };
  }

  componentDidMount() {
    const { whichNavItemOpen } = this.props;
    const { timeLineContent } = this.state;
    if (whichNavItemOpen === 'work') {
      this.setState({
        timeLineContent: projects.work[0]
      })
    } else if (whichNavItemOpen === 'projects') {
      this.setState({
        timeLineContent: projects.projects[0]
      })
    }
  }

  renderTimeLineContent = () => {
    const { whichNavItemOpen } = this.props;
    const { timeLineContent } = this.state;
    if (whichNavItemOpen === 'projects') return timeLineContent
    return timeLineContent
  }

  handleTimeLineClick = (e) => {
    e.preventDefault();
    const { whichNavItemOpen } = this.props;
    let item;

    if (whichNavItemOpen === 'projects') {
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
    const {
      isNightColor,
      isMobile,
      whichNavItemOpen,
    } = this.props;

    const {
      timeLineContent
    } = this.state;

    return (
      <CenterStyles>
        <>
          <FadeAnimation>
            <div className="section center">
              <ScrollBar
                onTimeLineClick={() => this.handleTimeLineClick}
                nightTime={isNightColor}
                projects={whichNavItemOpen === 'projects' ? projects.projects : projects.work}
                whichNavItemOpen={whichNavItemOpen}
              />
              <TimeLineContent
                timeLineContent={timeLineContent}
                isAbout={whichNavItemOpen === 'about'}
                isMobile={isMobile}
              />
            </div>
          </FadeAnimation>
        </>
      </CenterStyles>
    );
  }
}

Center.propTypes = {
  isProjects: PropTypes.bool.isRequired,
  isAbout: PropTypes.bool.isRequired,
  isNightColor: PropTypes.bool.isRequired,
};

export default Center;
