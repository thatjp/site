import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollBarStyles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class ScrollBar extends Component {
  render() {
    const { onTimeLineClick, nightTime, projects, title } = this.props;

    return (
      <ScrollBarStyles nightTime={nightTime}>
        <h2 className="title">{title}</h2>
        <div className="line">
          <div className="timeline">
            {projects.map((project, idx) => (
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
            ))}
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
  title: PropTypes.string,
};

export default ScrollBar;
