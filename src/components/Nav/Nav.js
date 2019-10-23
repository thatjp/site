/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavStyles from './styles';
import { FadeAnimation } from '../styles/FadeAnimation';
import NavArrowSvg from '../styles/svg/NavArrow';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHover: '',
    };
  }

  onNavHover = (name) => {
    this.setState({
      currentHover: name,
    });
  };

  onNavExit = () => {
    this.setState({
      currentHover: '',
    });
  };

  render() {
    const { currentHover } = this.state;
    const {
      nightTime,
      isMobile,
      handleNavClick,
    } = this.props;

    return (
      <FadeAnimation>
        <NavStyles nightTime mobile={isMobile}>
          <ul>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('about')}
                onMouseLeave={() => this.onNavExit()}
              >
                { currentHover === 'about'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
                <button type="submit" onClick={handleNavClick()}>
                  <Link to="about">
                    <h2>About</h2>
                  </Link>
                </button>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('work')}
                onMouseLeave={() => this.onNavExit()}
              >
                { currentHover === 'work'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
                <button type="submit" onClick={handleNavClick()}>
                  <Link to="work">
                    <h2>Work</h2>
                  </Link>
                </button>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('projects')}
                onMouseLeave={() => this.onNavExit()}
              >
                { currentHover === 'projects'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
                <button type="submit" onClick={handleNavClick()}>
                  <Link to="projects">
                    <h2>Projects</h2>
                  </Link>
                </button>
              </div>
            </li>
            <li
              onMouseEnter={() => this.onNavHover('contact')}
              onMouseLeave={() => this.onNavExit()}
            >
              { currentHover === 'contact'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
              <button type="submit" onClick={handleNavClick()}>
                <Link to="contact">
                  <h2>Contact</h2>
                </Link>
              </button>
            </li>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('resume')}
                onMouseLeave={() => this.onNavExit()}
              >
                <a
                  href={require('../../assets/JP-Harris-resume-121318.pdf')}
                >
                  { currentHover === 'resume'
                  && (
                  <FadeAnimation>
                    <div className="arrow">
                      <NavArrowSvg nightTime={nightTime} />
                    </div>
                  </FadeAnimation>
                  )}
                  <h2>Resume</h2>
                </a>
              </div>
            </li>
          </ul>
        </NavStyles>
      </FadeAnimation>
    );
  }
}

Nav.propTypes = {
  nightTime: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  handleNavClick: PropTypes.func.isRequired,
};

export default Nav;
