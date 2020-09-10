import React from 'react';
import './App.css';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/services">Services</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact us</Link>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
