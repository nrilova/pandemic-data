import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../section-2/Section-2.css'
import Icon2 from '../../../asset/images/icon2.png'
import Icon4 from '../../../asset/images/icon4.png'
import Icon5 from '../../../asset/images/icon5.png'
import Breathing from '../../../asset/images/breathing.svg'
import Icon6 from '../../../asset/images/icon6.png'
import BannerRight from '../../../asset/images/banner-right.png'

function Section2() {
    return (
        <div className="spread-wrapper padding-100 mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-title ">
                            <h5 className="text-basic text-center fs-5 " data-delay="0">Prevent</h5>
                            <h2 className="basic-basic text-center display-4 fw-bold" data-delay="50">Best way to prevent is avoid virus.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mt-5 mb-3">
                        <div className="spread-div d-flex" data-delay="0">
                            <div className="spread-image">
                                <div className="r-hex">
                                    <div className="r-hex-inner"></div>
                                </div>
                                <img src= {Icon2} alt=""></img>
                            </div>
                            <div className="spread-content">
                                <h4 className="mb-3">Personal Contact</h4>
                                <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5 mb-3">
                        <div className="spread-div has-animation d-flex" data-delay="50">
                            <div className="spread-image">
                                <div className="r-hex">
                                    <div className="r-hex-inner"></div>
                                </div>
                                <img src={Icon4} alt=""></img>
                            </div>
                            <div className="spread-content">
                                <h4 className="mb-3">Wash hands</h4>
                                <p>Maintain at least 1 metre (3 feet) distance between yourself &amp; anyone who is coughing or sneezing. If you are too close, get chance to infected.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5">
                        <div className="spread-div has-animation d-flex" data-delay="100">
                            <div className="spread-image">
                                <div className="r-hex">
                                    <div className="r-hex-inner"></div>
                                </div>
                                <img src={Icon5} alt=""></img>
                            </div>
                            <div className="spread-content">
                                <h4 className="mb-3">Social distancing</h4>
                                <p>Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5 mb-3">
                        <div className="spread-div has-animation d-flex" data-delay="150">
                            <div className="spread-image">
                                <div className="r-hex">
                                    <div className="r-hex-inner"></div>
                                </div>
                                <img src={Breathing} alt=""></img>
                            </div>
                            <div className="spread-content">
                                <h4 className="mb-3">Respiratory hygiene</h4>
                                <p>Maintain good respiratory hygiene as covering your mouth &amp; nose with your bent elbow or tissue when cough or sneeze.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 mt-5">
                        <div class="spread-div has-animation d-flex" data-delay="200">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                                
                                <img src={Icon6} alt=""></img>
                            </div>
                            <div class="spread-content">
                                <h4 class="mb-3">Clean And Disinfect</h4>
                                <p>Fever is a key symptom, experts say. Don't fixate on a number, but know it's really not a                                fever until your temperature reaches at least 100</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-5 mb-3">
                        <div class="spread-div has-animation d-flex" data-delay="250">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                                <img src={BannerRight} alt=""></img>
                            </div>                            
                            <div class="spread-content">
                                <h4 class="mb-3">Wear a Facemask</h4>
                                <p>Our comprehensive Online Marketing strategy will boost your website trafic hence monthly sales.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
    
}

export default Section2 