import React from 'react';
import PropTypes from 'prop-types';
import TimeLineContentStyles from './styles';

import ContentDescription from '../ContentDescription/ContentDescription';
import Content from '../Content/Content';
import About from '../About/About';

const TimeLineContent = ({ timeLineContent, isAbout }) => {
  return (
    <TimeLineContentStyles>
      {
      isAbout ? <About /> : (
        <div>
          <ContentDescription
            descriptionText={timeLineContent.description}
            responsibilities={timeLineContent.responsibilities}
          />
          <Content content={timeLineContent.name} />
        </div>
      )
    }
    </TimeLineContentStyles>
  );
};

TimeLineContent.propTypes = {
  timeLineContent: PropTypes.object.isRequired,
  isAbout: PropTypes.bool.isRequired,
};

export default TimeLineContent;
