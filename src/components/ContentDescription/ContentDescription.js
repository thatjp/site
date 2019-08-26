import React from 'react';
import PropTypes from 'prop-types';
import ContentDescriptionStyles from './styles';

const ContentDescription = ({ descriptionText, responsibilities }) => (
  <ContentDescriptionStyles>
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
};

export default ContentDescription;
