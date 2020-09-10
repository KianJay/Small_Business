import React from 'react';
import './App.css';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

const App = (props) => {
  return (
    <Router class="nav">
      <Nav class="nav-link active">
        <Link class="nav-link" to="/">
          Home
        </Link>
        <Link class="nav-link" to="/about">
          About
        </Link>
        <Link class="nav-link" to="/services">
          Services
        </Link>
        <Link class="nav-link" to="/team">
          Team
        </Link>
        <Link class="nav-link" to="/contact">
          Contact us
        </Link>
      </Nav>

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
    </Router>
  );
};

const nav_center = {
  justifyContent: 'center',
};

export default App;
