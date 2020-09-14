import React from 'react';
import './css/signin.css';

const Log = () => {
  return (
    <div>
      <div class="text-center">
        <form class="form-signin">
          {/* <img class="mb-4" src={Logo} alt="" width="72" height="72" /> */}
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-info btn-block" type="submit">
            Sign in
          </button>{' '}
          <button class="btn btn-lg btn-success btn-block" type="submit">
            Sign up
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2020 Deep head</p>
        </form>
      </div>
    </div>
  );
};

export default Log;
