import React from 'react';

function Footer() {  
    return (
        <div className="App">       
            <footer class="footer py-4">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-4 text-lg-left">Copyright © DeepHead 2020</div>
                        <div class="col-lg-4 my-3 my-lg-0">
                            <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/deep_____head/"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="col-lg-4 text-lg-right">
                            <a class="mr-3" href="#!">Privacy Policy</a>
                            <a href="#!">Terms of Use</a>                        
                        </div>
                    </div>
                </div>
            </footer>  
        </div>
    );
}

export default Footer;