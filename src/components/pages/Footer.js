import React from 'react';

import Instagram from './assets/img/instagram.png';

function Footer() {
  return (
    <div class="">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
          <br />
          ABN: 33 111 444 555 11
        </p>

        <p>
          &copy; 2017-2020 DeepHead, Inc. &middot;{' '}
          <a class="text-black" href="#">
            Privacy
          </a>
          &middot; <a href="#">Terms</a>&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/deep_____head/"
            target="_blank"
            STYLE="text-decoration:none"
          >
            <img src={Instagram} alt="" />
          </a>
        </p>
      </div>
    </div>

    // <body class="d-flex flex-column h-100">
    //   <main role="main" class="flex-shrink-0">
    //     <div class="container">
    //       <h1 class="mt-5">Sticky footer</h1>
    //       <a
    //         class="btn btn-dark btn-social mx-2"
    //         href="https://www.instagram.com/deep_____head/"
    //       >
    //         <i class="fab fa-instagram"></i>
    //       </a>
    //       <div class="col-lg-4 text-lg-right">
    //         <a class="mr-3 text-black" href="#!">
    //           Privacy Policy
    //         </a>
    //         <a href="#!">Terms of Use</a>
    //       </div>
    //     </div>
    //   </main>

    //   <footer class="footer mt-auto py-3">
    //     <div class="container">
    //       <span class="text-muted">Place sticky footer content here.</span>
    //     </div>
    //   </footer>
    // </body>

    // <div className="App">
    //   <footer class="footer py-4">
    //     <div class="container">
    //       <div class="row align-items-center">
    //         <div class="col-lg-4 text-lg-left">Copyright © DeepHead 2020</div>
    //         <div class="col-lg-4 my-3 my-lg-0">
    //           <a
    //             class="btn btn-dark btn-social mx-2"
    //             href="https://www.instagram.com/deep_____head/"
    //           >
    //             <i class="fab fa-instagram"></i>
    //           </a>
    //         </div>
    //         <div class="col-lg-4 text-lg-right">
    //           <a class="mr-3 text-black" href="#!">
    //             Privacy Policy
    //           </a>
    //           <a href="#!">Terms of Use</a>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default Footer;
