import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App/App';
import Nav from './Nav/Nav';
import About from './About/About';
// import Work from './Work/Work';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const routes = () => (
  <>
    <App />
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </>
);

export default routes;
