import React from 'react';
import FadeAnimation from './styles/elements/FadeAnimation';
import NavContentA from './styles/elements/NavContentA';

const urls = {
  'Redux Example': 'https://jp-example.herokuapp.com/',
  'Game of Thrones Map': 'https://got-map.herokuapp.com/',
  'Front End Sandbox': 'https://front-end-sandbox.herokuapp.com/',
  'ITI Busines Site': 'https://iti-co.herokuapp.com/',
};

const Projects = () => (
  <div>
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
  </div>
);

export default Projects;
