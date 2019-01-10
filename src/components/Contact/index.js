import React from 'react';
import NavContentA from '../styles/elements/NavContentA';
import FadeAnimation from '../styles/elements/FadeAnimation';

const urls = {
  github: 'https://github.com/thatjp',
  linkedIn: 'https://www.linkedin.com/in/jp-harris/',
  instagram: 'https://www.instagram.com/_jpharris_/',
};

const Contact = () => (
  <FadeAnimation>
    <ul>
      {
        Object.keys(urls).map(url => (
          <FadeAnimation
            key={url}
          >
            <NavContentA
              href={urls[url]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </NavContentA>
          </FadeAnimation>
        ))
      }
    </ul>
  </FadeAnimation>
);

export default Contact;
