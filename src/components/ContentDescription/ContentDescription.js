import React from 'react';
import PropTypes from 'prop-types';
import ContentDescriptionStyles from './styles';
import { generateKey } from '../../utils/utils';
import { SlideinAnimation } from '../styles/FadeAnimation';


const ContentDescription = ({ descriptionText, responsibilities, isMobile }) => (
  <ContentDescriptionStyles mobile={isMobile}>
    <SlideinAnimation>
      <p>{descriptionText}</p>
      {responsibilities
        ? (
          <ul>
            {responsibilities.map(responsibility => (
              <li key={generateKey()} className="responsibility">
                <p>{responsibility}</p>
              </li>
            ))}
          </ul>
        ) : null
      }
    </SlideinAnimation>
  </ContentDescriptionStyles>
);

ContentDescription.propTypes = {
  descriptionText: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default ContentDescription;
