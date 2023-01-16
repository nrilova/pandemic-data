import React from "react";
import "../section-5/Questions.css";
import Cardfaqs from "../../atoms/Cardfaqs";
import { Container } from "react-bootstrap";

/*
function Section5() {
    return (
        <div class="spread-wrapper padding-100 bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-8">
                        <div class="section-title text-center">
                            <h5 class="has-animation" data-delay="0">01. How does COVID-19 spread? </h5>
                            <h2 class="has-animation" data-delay="50">Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus.</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 mt-5 mb-3">
                        <div class="spread-div has-animation" data-delay="0">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                            </div>
                            <div class="spread-content">
                                <h4 class="mb-3">02. 2. What are the symptoms of COVID-19? </h4>
                                <p>xxxxx</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-5 mb-3">
                        <div class="spread-div has-animation" data-delay="50">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                            </div>
                            <div class="spread-content">
                                <h4 class="mb-3">xxxxxx</h4>
                                <p>xxxxxx</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-5">
                        <div class="spread-div has-animation" data-delay="100">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                            </div>
                            <div class="spread-content">
                                <h4 class="mb-3">xxxxxxx</h4>
                                <p>xxxxxx</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-5 mb-3">
                        <div class="spread-div has-animation" data-delay="150">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                            </div>
                            <div class="spread-content">
                                <h4 class="mb-3">xxxxxxxx</h4>
                                <p>xxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-5">
                        <div class="spread-div has-animation" data-delay="200">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                            </div>
                            <div class="spread-content">
                                <h4 class="mb-3">xxxxxx</h4>
                                <p>xxxxxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 mt-5 mb-3">
                        <div class="spread-div has-animation" data-delay="250">
                            <div class="spread-image">
                                <div class="r-hex">
                                    <div class="r-hex-inner"></div>
                                </div>
                            </div>                            
                            <div class="spread-content">
                                <h4 class="mb-3">xxxxxxxxxx</h4>
                                <p>xxxxxxxxxx</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
    
}

export default Section5;
*/

function Questions() {
  return (
  
      <Container className="row justify-content-between align-items-center container1 section-questions">
        <Container className="section-title-center">
          <h5>Faqs</h5>
          <Cardfaqs description="Faqs" />
          <Cardfaqs description="Frequently Asked Questions"/>
          <Cardfaqs description="1. How does COVID-19 spread? Data has shown that it spreads from person to person among those in close contact (within about 6 feet, or 2 meters). The virus spreads by respiratory droplets released when someone infected with the virus." />
          <Cardfaqs description="2. What are the symptoms of COVID-19?"/>
          <Cardfaqs description="3. Should I wear mask?"/>
          <Cardfaqs description="4. What does it mean to self-isolate?"/>
          <Cardfaqs description="5. Can children or adolescents catch COVID-19?"/>
          <Cardfaqs description="6. Is there a vaccine or drug for COVID-19? While some western, traditional or home remedies may provide comfort and alleviate symptoms of mild COVID-19, there are no medicines that have been shown to prevent or cure the disease. WHO does not recommend self-medication with any medicines." />
        </Container>
      </Container>
    
  );
}

export default Questions;
