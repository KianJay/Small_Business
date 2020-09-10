import React from 'react';
import Gmap from './Gmap';
import Footer from './Footer';
import Paypal from './Paypal';

const Home = () => {
  return (
    <div>
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
      <hr />
      <div style={temp}>
        <h1>(Home page) Currently Under the construction </h1>
      </div>
      <hr />
      <footer>
        <Gmap />
        <Footer />
        <Paypal />
      </footer>
    </div>
  );
};
const temp = {
  textAlign: 'center',
  fontSize: '15px',
  color: 'red',
};

export default Home;
