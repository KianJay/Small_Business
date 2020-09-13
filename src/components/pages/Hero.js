import React from 'react';
import background from './assets/img/bg2.jpeg';
import background2 from './assets/img/bg7.jpg';
import background3 from './assets/img/bh6.jpg';
import Duyoung from './assets/img/Duyoung.png';
import Insub from './assets/img/Insub.jpg';
import Sohwa from './assets/img/Sohwa.jpg';
import Main1 from './assets/img/main1.jpg';
import Main2 from './assets/img/main2.jpg';
import Main3 from './assets/img/main3.jpg';
import { Link } from 'react-router-dom';

import './carousel.css';

const Hero = () => {
  return (
    <main role="main">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={background} class="d-block w-100 " alt="..." />
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>

            <div class="container">
              <div class="carousel-caption text-left">
                <h1 class="text-dark bg-light w-50">Best People.</h1>
                <p class="text-dark bg-light w-100">
                Deep head is a partnership company by 3 people from Australia, 
                and Korea, then provide them with ongoing structured training, 
                along with the best tools, support, processes, and leadership.
                

                </p>
                <p>
                  <Link to="team" class="btn btn-lg btn-dark" role="button">
                    Team
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={background2} class="d-block w-100" alt="..." />
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <div class="container">
              <div class="carousel-caption">
                <h1 class="bg-primary opacity-3">Expert Advice.</h1>
                <p class="bg-primary">
                Our technical teams have considerable experience designing and 
                supporting solutions across the full spectrum. You gain the benefit 
                of balanced advice without any vendor bias.


                </p>
                <p>
                  <Link to="services" class="btn btn-lg btn-light" role="button">
                    Services
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src={background3} class="d-block w-100" alt="..." />
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#777" />
            </svg>
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>Fast Response.</h1>

                <p>
                We have invested in the best support tools and the best people 
                in the market to deliver our clients the responsiveness they need – 
                whether for a single ticket or an engineering project.
                </p>
                <p>
                  <Link
                    to="contact"
                    class="btn btn-lg btn-light"
                    href="#"
                    role="button"
                  >
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div><br/><br/>

      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4">
          <img src={Duyoung} class="mx-auto rounded-circle" alt="..." />

            <h2 class="p-4">Duyoung Jang</h2>

            <p>
            He is responsible for strategy, vision and growth of the company and 
            has the ability to rise above the daily details and decide where the 
            industry and business are headed.
            </p>
            <p>
            
            </p>
          </div>

          <div class="col-lg-4">
          <img src={Insub} class="mx-auto rounded-circle" alt="..." />
          
            <h2 class="p-3">Insub Kim</h2>
            <p>
            He is responsible for the development and architecture 
            of Enterprise Web Applications and knows how collaboration 
            and mutual inspiration.
            </p>
            <p>
              
            </p>
          </div>
          <div class="col-lg-4">
          <img src={Sohwa} class="mx-auto rounded-circle" alt="..." />
            <h2 class="p-4">Sohwa Lee </h2>
            <p>
            She is responsible for business 
            development and advising clients in the area of UI/UX Design.
            </p>
            <p>
             
            </p>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
            The Deep-Head team {' '}
              <span class="text-muted">is highly experienced</span>
            </h2>
            <p class="lead">
            in developing new platforms 
            in general, 
            and growth strategies in particular. Our team is made by SEO experts, 
            UI/UX Design team, and Software development team in areas related to 
            regulation, web, mobile, online, B2B platforms. 
            </p>
          </div>
          <div class="col-md-5">
          <img src={Main1} class="d-block w-100" alt="..." />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
            Product outlook {' '}
              <span class="text-muted">and potential</span>
            </h2>
            <p class="lead">
            We build fully responsible application platforms that 
            has significantly increased 450% more traffics in general, 
            and that lead 220% more profit to companies.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
          <img src={Main2} class="d-block w-100" alt="..." />
      
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
            Our team is made  <span class="text-muted">unique by maintaining </span>
            </h2>
            <p class="lead">
            well-user interface and experience, increasing over double 
            traffic and customers. Also, most importantly, we provide 
            them the most suitable business platforms for client with unique 
            business logos, well-design UI/UX and the business’s needs in order 
            to give them the best experience and results.
            </p>
          </div>
          <div class="col-md-5">
          <img src={Main3} class="d-block w-100" alt="..." />
          </div>
        </div>

        <hr class="featurette-divider" />
      </div>
    </main>

    /* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script>window.jQuery || document.write('<script src="../assets/js/vendor/jquery.slim.min.js"><\/script>')</script> */
  );
};

export default Hero;
