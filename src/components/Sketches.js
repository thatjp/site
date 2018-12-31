import React from 'react';
import NavContentA from './styles/elements/NavContentA';
import NavContentP from './styles/elements/NavContentP';
import FadeAnimation from './styles/elements/FadeAnimation';

const sketchUrls = {
  // 'Threejs React Sketch': 'https://three-playground.netlify.com/',
};

function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { return false; }
  }
  return true;
}

const Sketches = () => (
  
  <div>
    {console.log(isEmpty(sketchUrls))}
    { !isEmpty(sketchUrls)
      ? (
        <ul>
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
      ) : <NavContentP red> Check back soon </NavContentP>
    }
  </div>
);

export default Sketches;
