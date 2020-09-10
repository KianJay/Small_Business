import React from 'react';
import './App.css';
import Footer from './Footer';

function Team() {  
    return (
        <div className="Team">
            <header class="masthead">
                <div class="container">
                    <div className="intro-text">
                        <div class="intro-lead-in">Welcome To DeepHead!</div>
                        <div class="intro-heading text-uppercase">We are IT consulting experts!</div>
                        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell us your time</a>
                    </div>
                </div>
            </header>
            <section class="page-section bg-light" id="team">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                        <h3 class="section-subheading text-muted">We care about our customers.</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src={require("./assets/img/Duyoung.png")} alt="" />
                                <h4>Duyoung Jang</h4>
                                <p class="text-muted">Chief Executive Officer (CEO)</p>
                                <a class="btn btn-dark btn-social mx-2" href="https://github.com/kianjay"><i class="fab fa-github"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/kianjay"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src={require("./assets/img/Insub.jpg")} alt="" />
                                <h4>Insub Kim</h4>
                                <p class="text-muted">Chief Technology Officer (CTO)</p>
                                <a class="btn btn-dark btn-social mx-2" href="https://github.com/slothpunch"><i class="fab fa-github"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/insub-kim-61612419b/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src={require("./assets/img/Sohwa.jpg")} alt="" />
                                <h4>Sohwa Lee</h4>
                                <p class="text-muted">Chief Strategy Officer (CSO)</p>
                                <a class="btn btn-dark btn-social mx-2" href="https://github.com/tagonanmm"><i class="fab fa-github"></i></a>
                                <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/sohwalee/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">We are experienced and always listen to our customers. Our team creates websites and mobile applications to give customers the best satisfaction. We are all willing to hear feedback from customers. </p></div>
                    </div>
                </div>
            </section>
            
            <div class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                        </div>
                        <div class="col-md-3 col-sm-6 my-3">
                            <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer> 
                <Footer />
            </footer>

        </div>
    
  );
}

export default Team;