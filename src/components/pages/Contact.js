import React from 'react';
import './css/App.css';
import Footer from './Footer';
import ContactUsMail from './ContEmail';
import Gmap from './Gmap';

const Contact = () => {
  return (
    <div className="Contact">
      <ContactUsMail />
      
      <iframe width="2030" height="630" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" 
      src="https://maps.google.com/maps?width=630&amp;height=576&amp;hl=en&amp;q=160%20Sussex%20Sydney+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe> 
      <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=3a19da6b02317fd004cf13ba1367d8c0e761e69e'>
      </script>
      <Gmap />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Contact;
