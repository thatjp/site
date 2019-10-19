import React from 'react';
import { FadeAnimation } from '../styles/FadeAnimation';
import SketchesStyles from './styles';

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

  <SketchesStyles>
    { isEmpty(sketchUrls)
      ? (
        <ul>
          {
        Object.keys(sketchUrls).map(url => (
          <li>
            <FadeAnimation>
              <a
                href={sketchUrls[url]}
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
      ) : (
        <FadeAnimation>
          <p>
            Check back soon
          </p>
        </FadeAnimation>
      )
    }
  </SketchesStyles>
);

export default Sketches;
