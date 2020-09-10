import React from 'react';
import './App.css';
import Footer from './Footer';

function About() {
  return (
    <div className="About">
      <header class="masthead">
        <div class="container">
          <div className="intro-text">
            <div class="intro-lead-in">Welcome To DeepHead!</div>
            <div class="intro-heading text-uppercase">
              We are IT consulting experts!
            </div>
            <a
              class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
            >
              Tell us your time
            </a>
          </div>
        </div>
      </header>
      <section class="page-section" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">About US</h2>
            <h3 class="section-subheading text-muted">Journey</h3>
          </div>
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img
                  class="rounded-circle img-fluid"
                  src={require('./assets/img/W_deep_head.png')}
                  alt=""
                />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Sep.2020</h4>
                  <h4 class="subheading">Our Humble Beginnings</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Our journey just started with three members: Duyoung, Insub
                    and Sohwa!
                  </p>
                  <p class="text-muted">
                    We are studying at the same university Victoria University
                    in Sydney and started this journey together!
                  </p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default About;
