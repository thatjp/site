import React from 'react';
import FadeAnimation from '../styles/FadeAnimation';

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
            <a
              href={urls[url]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          </FadeAnimation>
        ))
      }
    </ul>
  </FadeAnimation>
);

export default Contact;
