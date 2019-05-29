import React from 'react';
import PropTypes from 'prop-types';
import TimeLineContentStyles from './styles';

import ContentDescription from '../ContentDescription/ContentDescription';
import Content from '../Content/Content';

const TimeLineContent = ({ timeLineContent }) => {
  return (
    <TimeLineContentStyles>
      <ContentDescription descriptionText={timeLineContent.description} />
      <Content content={timeLineContent.name} />
    </TimeLineContentStyles>
  );
};

TimeLineContent.propTypes = {
  timeLineContent: PropTypes.object.isRequired,
};

export default TimeLineContent;
