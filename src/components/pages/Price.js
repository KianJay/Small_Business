import React from 'react';
import Paypal from './Paypal';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Price = () => {
  return (
    <div>
      <body>
      <div class="col-lg-8 mx-auto text-center">
       <h1 class="section-heading text-uppercase p-3">Pricing</h1>
        <p class="large text-muted p-3">
          
        <p>Deep Head offers competitive rates and pricing plans to 
        help you find one that fits your needs and budget.</p>
        If you are unsure which pricing plan to choose, 
        then register for a free trial to see how Deep Head's features can 
        help you to sell your products and build your business. 
        You can always upgrade your plan to add new features and functionality to
        your business.
        </p>

        </div>
        <hr class="my-3 p-3"></hr><br/><br/>
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
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-sm btn-outline-success p-2">
                Limited access
              </button><br /> <br /> 

                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-success"
                >
                  Sign up for free
                </button>
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
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-sm btn-outline-info p-2">
              Get full Access
              </button><br /> <br />

                <button type="button" class="btn btn-lg btn-block btn-info">
                  <Link to="Pay"> Get Started </Link>
                </button>
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
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-sm btn-outline-danger p-2">
              Booste your Business
              </button><br /> <br />
                <button type="button" class="btn btn-lg btn-block btn-danger">
                  <Link to="Pay"> Get Started </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br/><br/><br/>
        <hr class="my-1"></hr>
      </body>
      <Footer />
    </div>
  );
};

export default Price;