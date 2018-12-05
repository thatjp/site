import React from 'react';
import NavContentA from './styles/elements/NavContentA';
import FadeAnimation from './styles/elements/FadeAnimation';

const Contact = () => (
  <FadeAnimation>
    <NavContentA
      href="https://github.com/thatjp"
      target="_blank"
      rel="noopener noreferrer"
    >
        github
    </NavContentA>
    <NavContentA
      href="https://www.instagram.com/_jpharris_/"
      target="_blank"
      rel="noopener noreferrer"
    >
        instagram
    </NavContentA>
  </FadeAnimation>
);

export default Contact;
