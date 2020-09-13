import React from 'react';
import './App.css';
import Footer from './Footer';
import Datepicker from './Datepicker';
import ContactUsMail from './ContEmail';
import Gmap from './Gmap';
import Instagram from './assets/img/instagram.png';

const Contact = () => {
  return (
    <div className="Contact">

      <ContactUsMail/>
      <Gmap />
      <br/>
      <br/>
        <Footer />
    </div>
  
    );
};



export default Contact;
