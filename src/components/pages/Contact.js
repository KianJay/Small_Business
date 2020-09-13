import React from 'react';
import './App.css';
import Footer from './Footer';
import Datepicker from './Datepicker';
import Gmap from './Gmap';
import Instagram from './assets/img/instagram.png';

const Contact = () => {
  return (
    <div className="Contact">
      <header class="conthead">
        <div class="row p-5">
          <div class="col-lg-7" id="right-col"></div>
          <div class="col-md-4">
            <h1 class="my-3-header-2"> Contact us! </h1>

            <p class="subcontact text-muted">
              {' '}
              Do you have any issue/question?{' '}
            </p>
            <p class="subcontact text-muted"> Do you have any question? </p>
            <p class="subcontact text-muted"> Do you have any help? </p>

            <div class="row"></div>
          </div>
        </div>
      </header>

      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2><br />
            <h6 class="text-white">
             
              <a href="https://www.instagram.com/deep_____head/" target="_blank" STYLE="text-decoration:none">
              <p class="text-light"><img src={Instagram} /> 
            &nbsp; @deep_____head/<br /><br /></p></a>
            <h6 class="p-1">Phone: 0000 111 222</h6>
            Address: 160 Sussex St, Sydney NSW 2000
            </h6><br /><br />
            
          </div>
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div class="row align-items-stretch mb-5">
              <div class="col-md-6">
                <div class="form-group" id="Datepicker">
                  <Datepicker />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p class="help-block text-danger"></p>
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group form-group-textarea mb-md-0">
                  <textarea
                    class="form-control"
                    id="message"
                    placeholder="Your Message *"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div class="text-center">
              <div id="success"></div>
              <button
                class="btn btn-primary btn-xl text-uppercase"
                id="sendMessageButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Gmap />
      <footer class="p-5">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
