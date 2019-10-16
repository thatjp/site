import React from 'react';
import PropTypes from 'prop-types';
import TimeLineContentStyles from './styles';

import ContentDescription from '../ContentDescription/ContentDescription';
import Content from '../Content/Content';
import About from '../About/About';

const TimeLineContent = ({ timeLineContent, isAbout, isMobile }) => (
  <TimeLineContentStyles>
    {
    isAbout ? <About /> : (
      <div>
        <Content
          content={timeLineContent.name}
        />
        <ContentDescription
          descriptionText={timeLineContent.description}
          responsibilities={timeLineContent.responsibilities}
          isMobile={isMobile}
        />
      </div>
    )
  }
  </TimeLineContentStyles>
);

TimeLineContent.propTypes = {
  timeLineContent: PropTypes.object.isRequired,
  isAbout: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default TimeLineContent;
