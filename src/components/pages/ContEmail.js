import React from 'react';
import emailjs from 'emailjs-com';
import Instagram from './assets/img/instagram.png';

export default function ContactUsMail() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uer3rsp',
        'template_lftqmpd',
        e.target,
        'user_BZCAEih9fUa0sx6zE17rJ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="Contact">
      <section class="page-section" id="contact">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase p-3">Contact Us</h2>
            <h6 class="section-subheading font-weight-light text-white">
              <a
                href="https://www.instagram.com/deep_____head/"
                target="blank"
                class="text-white"
                STYLE="text-decoration:none"
              >
                <img src={Instagram} alt="" />
                &nbsp;@deep_____head
              </a>
              <br />
              <br />
              Phone: 000 111 222
              <br />
              Address: 160 Sussex St, Sydney NSW 2000
            </h6>
            <br />
            <br />
            <h1 class="text-white">Book your consultation here</h1>
            <br />
          </div>

          <form className="contact-form" id="contactForm" onSubmit={sendEmail}>
            <div class="row align-items-stretch mb-5">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="hidden" name="contact_number" />
                  <input
                    class="form-control"
                    type="date"
                    name="date"
                    placeholder="Your date *"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input type="hidden" name="contact_number" />
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required="required"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group form-group-textarea mb-md-0">
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    placeholder="Your Message *"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div class="text-center">
              <input
                class="btn btn-primary btn-xl text-uppercase"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
