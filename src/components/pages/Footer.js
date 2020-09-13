import React from 'react';
import { SiGmail } from 'react-icons/si';
import Instagram from './assets/img/instagram.png';

function Footer() {
  return (
    <footer class="container">
      <div class="row justify-content-center">
        <div class="col-sm">
          <p>Head Office: 160 Sussex St, Sydney NSW 2000</p>
          <p>ABN 33 111 444 555 116</p>
        </div>

        <div class="col-sm">
          <a href="#">To top</a>
        </div>

        <div class="col-sm">
          <a class="text-black" href="#">
            Privacy <br /> <br />
          </a>
          <a>
            <a href="#">Terms</a>&nbsp;&nbsp;&nbsp;{' '}
          </a>
          <br /> <br />
          <a href="https://www.instagram.com/deep_____head/" target="_blank">
            <img src={Instagram} />
          </a>
          <br/><br/>
          <p> &copy; 2020 DeepHead, Inc. </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
