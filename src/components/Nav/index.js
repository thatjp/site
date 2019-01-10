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
        <h2 onClick={() => showProjects('about')}>About</h2>
        <h2 onClick={() => showProjects('projects')}>Projects</h2>
        <h2 onClick={() => showProjects('sketches')}>Sketches</h2>
        <h2 onClick={() => showProjects('contact')}>Contact</h2>
        <a
          href={require('../../assets/JP-Harris-resume-121318.pdf')}
          target="_blank"
        >
          <h2>Resume</h2>
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
