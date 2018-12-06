import React from 'react';
import NavContentA from './styles/elements/NavContentA';
import FadeAnimation from './styles/elements/FadeAnimation';

const sketchUrls = {
  'Threejs React Sketch': 'https://three-playground.netlify.com/',
};

const Sketches = () => (
  <div>
    <ul className="nav-projects_url">
      {
        Object.keys(sketchUrls).map(url => (
          <FadeAnimation
            key={url}
          >
            <NavContentA
              href={sketchUrls[url]}
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

export default Sketches;
