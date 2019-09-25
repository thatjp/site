import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollBarStyles from './styles';
import NavArrowSvg from '../styles/svg/NavArrow';
// eslint-disable-next-line react/prefer-stateless-function
class ScrollBar extends Component {
  shouldTimeLineRender = (projects, onTimeLineClick) => {
    // return <h2>{projects[0].name}</h2>
    projects.map((project, idx) => (
      <div className="timeline-content">
        <h2>{project.startDate}</h2>
        <button
          type="button"
          name={project.name}
          onClick={onTimeLineClick()}
        >
          {project.name}
        </button>
      </div>
    ));
  }

  render() {
    const {
      onTimeLineClick,
      nightTime,
      projects,
    } = this.props;

    return (
      <ScrollBarStyles nightTime={nightTime}>
        <div className="line">
          <div className="timeline">
            {projects
              ? projects.map((project, idx) => (
                <div className="timeline-content">
                  <h2>{project.startDate}</h2>
                  <button
                    type="button"
                    name={project.name}
                    onClick={onTimeLineClick()}
                  >
                    {project.name}
                  </button>
                </div>
              )) : null
            }
          </div>
        </div>
      </ScrollBarStyles>
    );
  }
}

ScrollBar.propTypes = {
  onTimeLineClick: PropTypes.func.isRequired,
  nightTime: PropTypes.bool.isRequired,
  projects: PropTypes.object.isRequired,
};

export default ScrollBar;
