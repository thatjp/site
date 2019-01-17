import React from 'react';
import FadeAnimation from '../styles/FadeAnimation';
import ContactStyles from './styles';

const urls = {
  github: 'https://github.com/thatjp',
  linkedIn: 'https://www.linkedin.com/in/jp-harris/',
  instagram: 'https://www.instagram.com/_jpharris_/',
};

const Contact = () => (
  <ContactStyles>
    <ul>
      {
        Object.keys(urls).map(url => (
          <li>
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
          </li>
        ))
      }
    </ul>
  </ContactStyles>
);

export default Contact;
