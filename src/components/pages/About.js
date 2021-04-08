import React from 'react';
import './css/about.css';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <div class="about-section paddingTB60 gray-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-7 col-sm-6">
              <div class="about-title clearfix">
                <h1>
                  About <span>Deep head</span>
                </h1>
                <br />
                <h3>About us </h3>
                <p class="about-padding">
                  Our journey just started with three members: Duyoung, Insub
                  and Sohwa. The Deep-Head team is highly experienced in
                  developing new platforms in general, and growth strategies in
                  particular. Our team is made by SEO experts, UI/UX Design
                  team, and Software development team in areas related to
                  regulation, web, mobile, online, B2B/B2C platforms.
                  Deep-Head’s principals average over 10 years’ experience in
                  this field. The teams combine industry-leading Big Data and
                  strategic insights with practical experience in prioritizing,
                  igniting, and monetizing innovation in platform businesses big
                  and small.{' '}
                </p>
                <p></p>
                <h3> Vision </h3>
                <div class="text-muted">
                  <a>
                    {' '}
                    • We trust each other and have a good time succeeding
                    together.{' '}
                  </a>
                  <br />
                  <a>
                    {' '}
                    • The happier clients are, the more successful we are.{' '}
                  </a>
                  <br />
                  <a> • We are a global team that values diversity. </a>
                  <br />
                  <a> • We create sustainable growth. </a>
                  <br />
                </div>
                <br />
                <h3>Goal</h3>
                <div class="text-muted">
                  <a>
                    {' '}
                    • Always being conneted with customers to provide their
                    needs.{' '}
                  </a>
                  <br />
                  <a>
                    {' '}
                    • Retain the 1st position in the world in the same line of
                    business.{' '}
                  </a>
                  <br />
                  <a>
                    {' '}
                    • Create the products and services that give customers the
                    best satisfaction.{' '}
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div class="about-img col-md-5 col-sm-6"></div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default About;
