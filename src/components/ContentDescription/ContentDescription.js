import React from 'react';
import PropTypes from 'prop-types';
import ContentDescriptionStyles from './styles';

const ContentDescription = ({ descriptionText, responsibilities, isMobile }) => (
  <ContentDescriptionStyles mobile={isMobile}>
    <p>{descriptionText}</p>
    {responsibilities
      ? (
        <ul>
          {responsibilities.map(responsibility => (
            <li className="responsibility">
              <p>{responsibility}</p>
            </li>
          ))}
        </ul>
      ) : null
    }
  </ContentDescriptionStyles>
);

ContentDescription.propTypes = {
  descriptionText: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ContentDescription;
