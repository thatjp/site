/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import NavStyles from './styles';
import FadeAnimation from '../styles/FadeAnimation';
import NavArrowSvg from '../styles/svg/NavArrow';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHover: '',
    };
  }

  showProjects = (itemName) => {
    const { onClick } = this.props;
    
    switch (itemName) {
      case 'projects':
        onClick('projects');
        break;
      case 'about':
        onClick('about');
        break;
      case 'sketches':
        onClick('sketches');
        break;
      case 'contact':
        onClick('contact');
        break;
      default:
        break;
    }
  };

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
    const { nightTime } = this.props;

    return (
      <FadeAnimation>
        <NavStyles nightTime>
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
                <h2 onClick={() => this.showProjects('about')}>About</h2>
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
                <h2 onClick={() => this.showProjects('projects')}>Projects</h2>
              </div>
            </li>
            <li>
              <div
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
                <h2 onClick={() => this.showProjects('contact')}>Contact</h2>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('resume')}
                onMouseLeave={() => this.onNavExit()}
              >
                <a
                  href={require('../../assets/JP-Harris-resume-121318.pdf')}
                  target="_blank"
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
  onClick: PropTypes.func,
  nightTime: PropTypes.bool.isRequired,
};

Nav.defaultProps = {
  onClick: () => {},
};

export default Nav;
