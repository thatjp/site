import React from 'react';
import ProjectsStyles from './styles';
import { FadeAnimation } from '../styles/FadeAnimation';

const urls = {
  'Dental Site': 'https://sl-react-prod.herokuapp.com',
  // 'ITI Busines Site': 'https://iti-react-prod.herokuapp.com/',
  'Redux Example': 'https://jp-example.herokuapp.com/',
  'Game of Thrones Map': 'https://got-map.herokuapp.com/',
  'Front End Sandbox': 'https://front-end-sandbox.herokuapp.com/',
};

const Projects = () => (
  <ProjectsStyles>
    <ul>
      {
        Object.keys(urls).map(url => (
          <li>
            <FadeAnimation>
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
  </ProjectsStyles>
);

export default Projects;
