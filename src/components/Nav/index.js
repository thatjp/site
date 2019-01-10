/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleWrapper from '../styles/elements/TitleWrapper';
import FadeAnimation from '../styles/elements/FadeAnimation';

const NavItemWrapper = styled.div`
  display: inline;
`;

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
      <NavItemWrapper>
        <TitleWrapper
          onClick={() => showProjects('about')}
        >
        {/* <img src={require('../assets/arrow.svg')} alt="Here" style={style} /> */}
          <h2>About</h2>
        </TitleWrapper>
      </NavItemWrapper>
      <NavItemWrapper>
        <TitleWrapper
          onClick={() => showProjects('projects')}
        >
          Projects
        </TitleWrapper>
      </NavItemWrapper>
      <NavItemWrapper>
        <TitleWrapper
          onClick={() => showProjects('sketches')}
        >
          Sketches
        </TitleWrapper>
      </NavItemWrapper>
      <NavItemWrapper>
        <TitleWrapper
          onClick={() => showProjects('contact')}
        >
          Contact
        </TitleWrapper>
      </NavItemWrapper>
      <NavItemWrapper>
        <a
          href={require('../../assets/JP-Harris-resume-121318.pdf')}
          target="_blank"
          resume
        >
          <TitleWrapper>
            Resume
          </TitleWrapper>
        </a>
      </NavItemWrapper>
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
