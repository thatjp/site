import React from 'react';
import FadeAnimation from '../styles/elements/FadeAnimation';

const sketchUrls = {
  // 'Threejs React Sketch': 'https://three-playground.netlify.com/',
};

function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { return true; }
  }
  return false;
}

const Sketches = () => (

  <div>
    { isEmpty(sketchUrls)
      ? (
        <ul>
          {
        Object.keys(sketchUrls).map(url => (
          <FadeAnimation
            key={url}
          >
            <a
              href={sketchUrls[url]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url}
            </a>
          </FadeAnimation>
        ))
      }
        </ul>
      ) : (
        <FadeAnimation>
          <p>
            Check back soon
          </p>
        </FadeAnimation>
      )
    }
  </div>
);

export default Sketches;
