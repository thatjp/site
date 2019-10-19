import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollBarStyles from './styles';
import { generateKey } from '../../utils/utils';
import { SlideinAnimation } from '../styles/FadeAnimation';

class ScrollBar extends Component {
  shouldTimeLineRender = (projects, onTimeLineClick) => {
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
      whichNavItemOpen,
    } = this.props;

    return (
      <ScrollBarStyles nightTime={nightTime}>
        <div className="line">
          {whichNavItemOpen !== 'about'
          && (
          <SlideinAnimation>
            {projects
              ? projects.map(project => (
                <div
                  className="timeline-content"
                  key={generateKey('projects')}
                >
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
          </SlideinAnimation>
          )}
        </div>
      </ScrollBarStyles>
    );
  }
}

ScrollBar.propTypes = {
  onTimeLineClick: PropTypes.func.isRequired,
  nightTime: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired,
  whichNavItemOpen: PropTypes.string.isRequired,
};

export default ScrollBar;
