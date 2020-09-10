import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navi() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img src={require('./assets/img/deep_head_3.png')} alt="logo" />
          </a>
          <a class="navbar-brand js-scroll-trigger" href="#page-top">
            <img src="assets/img/navbar-logo.svg" alt="" />
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fa fa-bars ml-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
              <Link to="/services">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger">Services</a>
                </li>
              </Link>
              <Link to="/about">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger">About Us</a>
                </li>
              </Link>
              <Link to="/team">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger">Team</a>
                </li>
              </Link>
              <Link to="/contact">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navi;
