import React from 'react'
import Projects from './Projects';
import Sketches from './Sketches';
import Contact from './Contact';
import About from './About';

const ContentWrapper = (props) => {
  
  const isOpen = (obj) => {
    return Object.keys(obj).find(key => obj[key] === true)
  }

  const renderContent = () => {
    switch (isOpen(props.isOpen)) {
      case 'projects':
        return <Projects/>
      case 'sketches':
        return <Sketches/>
      case 'contact':
        return <Contact/>
      case 'about':
        return <About/>
      default:
        break;
    }
  }

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default ContentWrapper
