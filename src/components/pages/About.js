import React from 'react';
import './App.css';
import Footer from './Footer';

function About() {
  return (
    <div className="About">
      <section class="page-section" id="about">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">About US</h2>
            <h3 class="section-subheading text-muted">Journey</h3>
          </div>
          <ul class="timeline">
            <li>
              <div class="timeline-image"><img class="rounded-circle img-fluid" src={require('../assets/img/about_dh.png')} alt="" /></div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Sep.2020</h4>
                  <h4 class="subheading">Our Humble Beginnings</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    Our journey just started with three members: Duyoung, Insub and Sohwa!
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
              <img class="rounded-circle img-fluid" 
                   src={require('../../assets/img/about_2.png')}
                   alt="" /></div>
               <div class="timeline-panel">
                <div class="timeline-heading">
                 <h4>We always</h4>
                 <h4 class="subheading"></h4>
                </div>
               <div class="timeline-body">
               <p class="text-muted">Create the products and services that give customers the best satisfaction</p>
               <p class="text-muted">Retain the 1st position in the world in the same line of business</p>
               </div>
              </div>
            </li>
            <br/>
            <br/>
            <li>
              <div class="timeline-image">
                <img
                  class="rounded-circle img-fluid"
                  src={require('../../assets/img/about_3.jpg')}
                  alt=""
                />
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>New Journey</h4>
                  <h4 class="subheading"></h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">
                    We are agile and always welcome new changellenges. We are ready to start a new voyage with you!
                  </p>
                  <p class="text-muted">
                    
                  </p>
                </div>
              </div>
            </li>
            <br />
            <br />
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
