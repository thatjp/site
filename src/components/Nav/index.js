/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import NavStyles from './styles';
import FadeAnimation from '../styles/FadeAnimation';

const Nav = (props) => {
  const showProjects = (itemName) => {
    props.onClick('projects');

    switch (itemName) {
      case 'projects':
        props.onClick('projects');
        break;
      case 'about':
        props.onClick('about');
        break;
      case 'sketches':
        props.onClick('sketches');
        break;
      case 'contact':
        props.onClick('contact');
        break;
      default:
        break;
    }
  };

  return (
    <FadeAnimation>
      <NavStyles>
        <div
          onClick={() => showProjects('about')}
        >
          <h2>About</h2>
        </div>
        <div
          onClick={() => showProjects('projects')}
        >
          Projects
        </div>
        <div
          onClick={() => showProjects('sketches')}
        >
          Sketches
        </div>
        <div
          onClick={() => showProjects('contact')}
        >
          Contact
        </div>
        <a
          href={require('../../assets/JP-Harris-resume-121318.pdf')}
          target="_blank"
          resume
        >
          <div>
            Resume
          </div>
        </a>
      </NavStyles>
    </FadeAnimation>
  );
};

Nav.propTypes = {
  onClick: PropTypes.func,
};

Nav.defaultProps = {
  onClick: () => {},
};

export default Nav;
