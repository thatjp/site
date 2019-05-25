import React from 'react';
import PropTypes from 'prop-types';
import ContentDescriptionStyles from './styles';

const ContentDescription = ({ descriptionText }) => (
  <ContentDescriptionStyles>
    <p>{descriptionText}</p>
  </ContentDescriptionStyles>
);

ContentDescription.propTypes = {
  descriptionText: PropTypes.string.isRequired,
};

export default ContentDescription;
