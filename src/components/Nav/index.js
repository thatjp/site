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

  const onNavHover = () => {
    /*
    --------------------------------------------------
      the arrow should render without knowing whether the nav item is currently open or not
      onMouseEnter the div id is found and the arrow is appending inline to the title
      if the item is clicked the arrow reverses the Nav closes and the new menu slides 
      in from the right;
    --------------------------------------------------
    */
    return (
      <div className="arrow">
        <img src={require('../../assets/arrow.svg')} alt="here" />
      </div>
    );
  };

  return (
    <FadeAnimation>
      <NavStyles>
        <div 
          onMouseEnter={() => onNavHover()}
        >
          <h2 onClick={() => showProjects('about')}>About</h2>
        </div>
        <div>
          <h2 onClick={() => showProjects('projects')}>Projects</h2>
        </div>
        <div>
          <h2 onClick={() => showProjects('sketches')}>Sketches</h2>
        </div>
        <div>
          <h2 onClick={() => showProjects('contact')}>Contact</h2>
        </div>
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
