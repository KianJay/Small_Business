import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Price = () => {
  return (
    <div>
      <body>
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="section-heading text-uppercase p-3">Pricing</h1>
          <p class="large text-muted p-3">
            <p>
              Deep Head offers competitive rates and pricing plans to help you
              find one that fits your needs and budget.
            </p>
            If you are unsure which pricing plan to choose, then register for a
            free trial to see how Deep Head's features can help you to sell your
            products and build your business. You can always upgrade your plan
            to add new features and functionality to your business.
          </p>
        </div>
        <hr class="my-3 p-3"></hr>
        <br />
        <br />
        <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Free</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="text-left mt-3 mb-4">
                  Our Free Membership gives you
                  <br />
                  access to all our basic level offerings.
                  <br />
                  <br />
                  <br />
                  <li>Only one user can access</li>
                  <li>Free Forum Support</li>
                  <li>Access to open Help center</li>
                </ul>
                <br />
                <br />
                <br />
                <br />
                <span class="badge badge-light">Limited access</span>
                <br />
                <br />
                <Link
                  to="login"
                  type="button"
                  class="btn btn-lg btn-block btn-outline-dark"
                >
                  Sign up for free
                </Link>
              </div>
            </div>
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Pro</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  $15 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="text-left mt-3 mb-4">
                  Our Pro Membership gives you
                  <br />
                  access to our Pro level offering.
                  <br />
                  <br />
                  <br />
                  <li>15 users can access</li>
                  <li>Access to Pro Forum</li>
                  <li>Email and Online chat Priority Support</li>
                  <li>Access to Member only Help center</li>
                </ul>
                <br />
                <br />
                <span class="badge badge-info"> Get full Access</span>
                <br /> <br />
                <Link
                  type="button"
                  class="btn btn-lg btn-block btn-info"
                  to="Pay"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  $29 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="text-left mt-3 mb-4">
                  Our Enterprise Membership gives
                  <br />
                  you access to all our Business level offering.
                  <br />
                  <br />
                  <li>30 users can access</li>
                  <li>Access to Enterprise Forum</li>
                  <li>Email and Online chat Priority Support</li>
                  <li>Access to Member only Help center</li>
                  <li>Provide Online Free Platform consulting Once</li>
                </ul>
                <span class="badge badge-danger"> Boost your Business</span>
                <br /> <br />
                <Link
                  type="button"
                  class="btn btn-lg btn-block btn-danger"
                  to="Pay"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </body>

      <Footer />
    </div>
  );
};

export default Price;
