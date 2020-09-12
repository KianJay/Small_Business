import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUsMail() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_uer3rsp', 'template_lftqmpd', e.target, 'user_BZCAEih9fUa0sx6zE17rJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="Contact">
      <header class="conthead">
        <div class="row">
          <div class="col-lg-7" id="right-col">
          </div>
          <div class="col-md-4">
            <h1 class="my-3-header-2"> Contact us! </h1>
            <p class="subcontact text-muted">        Do you have any issue/question?        </p>
            <p class="subcontact text-muted">        Do you have any question?        </p>
            <p class="subcontact text-muted">        Do you have any help?        </p>
            <div class="row">
            </div>
          </div>
        </div>
      </header>

      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading">
              Our address: 160 Sussex St, Sydney NSW 2000
            </h3>
          </div>
    
              <form className="contact-form" id="contactForm" onSubmit={sendEmail}>
                
              <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="name" />

                <label>Email</label>
                <input type="email" name="email" />

                <label>Message</label>
                <textarea name="message" />
                
                <input type="submit" value="Send" />
              </form>
        </div>
      </section>
    </div>
  );
}