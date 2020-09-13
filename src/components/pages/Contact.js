import React from 'react';
import './App.css';
import Footer from './Footer';
import Datepicker from './Datepicker';
import ContactUsMail from './ContEmail';
import Gmap from './Gmap';

const Contact = () => {
  return (
    <div className="Contact">
      <header class="conthead">
        <div class="row p-5">
          <div class="col-lg-7" id="right-col"></div>
          <div class="col-md-4" id="left-col">
            <h1 class="my-3-header-2"> Contact us! </h1>

            <p class="subcontact text-muted">Do you have any issue/question?</p>
            <p class="subcontact text-muted"> Do you have any question? </p>
            <p class="subcontact text-muted" id="sub_last">
              Do you have any help?
            </p>

            <div class="row"></div>
          </div>
        </div>
      </header>
      <ContactUsMail />
      <Gmap />
      <footer class="p-5">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
