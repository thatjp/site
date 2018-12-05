import React from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';
import Sketches from './Sketches';
import Contact from './Contact';
import About from './About';

const ContentWrapper = (props) => {
  const isOpen = obj => Object.keys(obj).find(key => obj[key] === true);

  const renderContent = () => {
    switch (isOpen(props.isOpen)) {
      case 'projects':
        return <Projects />;
      case 'sketches':
        return <Sketches />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

ContentWrapper.propTypes = {
  isOpen: PropTypes.bool,
};

ContentWrapper.defaultProps = {
  isOpen: false,
};

export default ContentWrapper;
