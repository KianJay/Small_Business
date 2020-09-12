import React from 'react';
import Background from '../pages/assets/img/bg2.jpeg';
import Footer from './Footer';
import Hero from './Hero';

import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Hero />
      {/* <section style={sectionStyle}>
        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header class="masthead mb-auto"></header>

          <main role="main" class="inner cover ">
            <div class="container">
              <h1 style={connect} class="cover-heading ">
                LEAD <span style={succ}>THE BUSINESS</span>
              </h1>
              <h1 style={connect} class="cover-heading ">
                TO <span style={succ}> SUCCESS </span>
              </h1>
            </div>

            <div class="w-100">
              <p>
                <Link to="services" class="btn btn-outline-light" type="button">
                  Our Services
                </Link>
              </p>
            </div>
          </main>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

const sectionStyle = {
  width: '100vw',
  height: '100vh',
  margin: '0',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPostion: 'center',
  backgroundImage: `url(${Background})`,
};

const connect = {
  fontSize: '3.2em',
  color: '#EAF2F8',
  fontFamily: 'Montserrat, sansSerif',
};

const succ = {
  fontSize: '1em',
  fontFamily: 'Montserrat, sansSerif',
  color: '#212121',
};
//   return (
//     <div>
//       <header class="masthead">
//         <div class="container">
//           <div className="intro-text">
//             <div class="intro-lead-in">Welcome To DeepHead!</div>
//             <div class="intro-heading text-uppercase">
//               We are IT consulting experts!
//             </div>
//             <a
//               class="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
//               href="#homecontact"
//             >
//               Tell us your time
//             </a>
//           </div>
//         </div>
//       </header>
//       <hr />
//       <div style={temp}></div>
//       <div id="homecontact">
//         <HomeContact />
//       </div>

//       <footer>
//         <Gmap />
//         <Footer />
//         <Paypal />
//       </footer>
//     </div>
//   );
// };
// const temp = {
//   textAlign: 'center',
//   fontSize: '15px',
//   color: 'red',
// };

export default Home;
