import React from 'react';
import AboutStyling from './styles';
import { FadeAnimation, SlideinAnimation } from '../styles/FadeAnimation';

const About = () => (
  <FadeAnimation>
    {/* <SlideinAnimation> */}
      <AboutStyling>
        <p>
          Hi I&apos;m JP.

          A Front End Developer specializing in React based applications.

          In my free time I try bridging the gap between some  
        </p>
      </AboutStyling>
    {/* </SlideinAnimation> */}
  </FadeAnimation>
);
export default About;
