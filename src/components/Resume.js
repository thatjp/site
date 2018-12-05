import React from 'react';

import TitleWrapper from './styles/elements/TitleWrapper';
import NavContentA from './styles/elements/NavContentA';

const Resume = () => (
  <div>
    <NavContentA
      href={require('../assets/jp-harris-resume.pdf')} // eslint-disable-line global-require
      download
      target="_blank"
      rel="noopener noreferrer"
      resume
    >
      <TitleWrapper>
            Resume
      </TitleWrapper>
    </NavContentA>
  </div>
);

export default Resume;
