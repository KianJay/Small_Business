import React from 'react';
import './css/App.css';
import Scroll from './Scroll';
import Instagram from './assets/img/instagram.png';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div class="container">
      <hr class="featurette-divider" />
      <div class="row justify-content-center ">
        <div class="col-sm">
          <p><a class="footer-a">Head Office:</a> 160 Sussex St, Sydney NSW 2000</p>
          <p><a class="footer-a">ABN:</a> 33 111 444 555 116</p>
          <p><a class="footer-a">Email:</a> deephead0920@yandex.com</p>
          <p><a class="footer-a">Contact:</a> 000 111 222</p>
        </div>
        <Scroll />
        <div class="col-left">
          <Link to="privacy" class="text-black">
            Privacy <br /> <br />
          </Link>
          <Link to="term">Terms</Link>&nbsp;&nbsp;&nbsp; <br /> <br />
          <a href="https://www.instagram.com/deep_____head/" target="blank">
            <img src={Instagram} alt="" />
          </a>
          <br />
          <br />
          <p> &copy; 2020 DeepHead, Inc. </p>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h4 class="text-center text-danger">“This website/app is for a class assignment and not for commercial purposes”</h4>
        <br/>
        <br/>
        <br/>

    </div>
  );
}

export default Footer;
