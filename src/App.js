import React from 'react';
import Contact from './components/pages/Contact';
import Team from './components/pages/Team';
import Home from './components/pages/Home';
import Price from './components/pages/Price';
import logo from './components/pages/assets/img/logo192.png';
import Services from './components/pages/Services';
import Pay from './components/pages/Pay';
import NotFound from './components/pages/NotFound';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div class="text-center">
        <Link class="navbar-brand text-center" to="/">
          <img src={logo} width="100" height="100" alt=""></img>
        </Link>
      </div>
      <div class="row fixed-top  justify-content-center"></div>
      <nav class="navbar navbar-expand-lg navbar-light nav ">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <ul class="navbar-nav ">
            <Link class="nav-link text-black  " to="/">
              <h6>
                Home <span class="sr-only">(current)</span>
              </h6>
            </Link>
            <Link class="nav-link text-black" to="/team">
              <h6> Team</h6>
            </Link>
            <Link class="nav-link text-black" to="/services">
              <h6> Services</h6>
            </Link>
            <Link class="nav-link text-black" to="/price">
              <h6>Price</h6>
            </Link>
            <Link class="nav-link text-black" to="/contact">
              <h6>Contact us</h6>
            </Link>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Team />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/price">
          <Price />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
