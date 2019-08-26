import React from 'react';
import PropTypes from 'prop-types';
import ContentStyles from './styles';

const Content = ({ content }) => (
  <ContentStyles>
    <h2>{content}</h2>
    <div>
      <img src="../../assets/logo_gradient_tm.svg" alt="" />
    </div>
  </ContentStyles>
);

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;
