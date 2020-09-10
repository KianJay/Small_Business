import React from 'react';
import './App.css';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Container } from 'reactstrap';
import Price from './components/pages/Price';

const App = (props) => {
  return (
    <Router>
      <img
        className="center"
        src={require('./assets/img/deep_head_2.png')}
        alt="logo"
      />
      <hr />
      <ul class="nav justify-content-center">
        <Nav class="nav justify-content-space-evenly">
          <Link class="navbar navbar-custom" to="/">
            Home
          </Link>
          <Link class="navbar navbar-custom" to="/about">
            About
          </Link>
          <Link class="navbar navbar-custom" to="/services">
            Services
          </Link>
          <Link class="navbar navbar-custom" to="/team">
            Team
          </Link>
          <Link class="navbar navbar-custom" to="/contact">
            Contact us
          </Link>
          <Link class="navbar navbar-custom" to="/price">
            Price
          </Link>
        </Nav>
      </ul>
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
        <Route path="/price">
          <Price />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
