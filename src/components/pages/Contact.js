import React from 'react';
import './css/App.css';
import Footer from './Footer';
import ContactUsMail from './ContEmail';
import Gmap from './Gmap';

const Contact = () => {
  return (
    <div className="Contact">
      <ContactUsMail />
      <Gmap />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
