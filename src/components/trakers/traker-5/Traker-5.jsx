import React from "react";


    render: function() {
      return (

        <div>
        
            <section>
              <div className="d-flex flex-column flex-shrink-0 bg-gray-tracker col-2 vh-100 d-flex justify-content-center bar-tracker" style={{width: '6rem'}}>
                <a href="./index.html" className="d-block d-flex justify-content-center align-items-center pt-4 pb-4"><img className="logo-traker rotate" src="./images/coronavirus.png" alt="corona" /></a>
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                  <li className="nav-item">
                    <a href="./traker01.html" className="nav-link">
                      <i className="far fa-clock text-blue-primary icon-track" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./tracker02.html" className="nav-link">
                      <i className="fas fa-bars text-blue-primary icon-track" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./tracker03.html" className="nav-link">
                      <i className="fas fa-th-large text-blue-primary icon-track" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./tracker04.html" className="nav-link">
                      <i className="far fa-folder text-blue-primary icon-track" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./tracker05.html" className="nav-link">
                      <i className="fas fa-crop-alt text-blue-primary icon-track" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./tracker06.html" className="nav-link">
                      <i className="fas fa-random text-blue-primary icon-track" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./tracker07.html" className="nav-link">
                      <i className="fas fa-globe-americas text-blue-primary icon-track" />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./tracker08.html" className="nav-link">
                      <i className="far fa-comment-alt text-blue-primary icon-track" />
                    </a>
                  </li>
                </ul>
                <div className="d-flex flex-column btn-circle-content">
                  <card className="btn-circle btn-circle-track bg-blue d-flex justify-content-center align-items-center">
                    <i className="fas fa-headset fs-4" />
                  </card>
                  <card className="btn-circle btn-circle-track bg-green d-flex justify-content-center align-items-center">
                    <i className="fas fa-shopping-cart fs-4" />
                  </card>
                </div>
              </div>
            </section>




            <section className="nav-info bg-white">
              <div className="d-flex flex-column overflow-auto vh-100" id="cards-container" style={{width: '25rem'}}>
                <h4 className="py-4 p-4 pb-0 fw-bold fs-3">COVID-19 Tracker</h4>
                <div className="total-cases p-3" id="barra_info_superior" />
                <div className="Top 10 Country p-3">
                  <h4 className="fs-3">Top 10 Country</h4>
                  <div className="p-3" id="barra_paises" />
                </div>
              </div>
            </section>




            <section className="track01 w-100 p-3" id="track04">
              <div className="card d-flex flex-row align-items-center p-2 pt-3 border-0 border-bottom bg-transparent">
                <h1 className="fs-4 fw-bold text-blue-primary">
                  Covid-19 Country Wise - Tabs
                </h1>
              </div>
              <div className="bg-transparent d-flex flex-row align-items-center flex-wrap p-3" id="track04_tabs" />
              <div className="card border-0 bg-transparent p-3" id="track04_cards">
                {<div class="row">
              <div
                class="card col-12 col-sm-12 col-md-4 col-lg-3 col-3 p-2 bg-transparent border-0 card-animation mb-1"
              >
                <div class="card border-0 card-total-cases p-2">
                  <div
                    class="d-flex justify-content-start align-items-center p-2 border-bottom"
                  >
                    <h1 class="ms-2 fs-5">Total Cases</h1>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center p-2"
                  >
                    <p class="ms-2 fs-2 mb-0 fw-bold text-blue-primary">
                      56451854
                    </p>
                  </div>
                  <img src="./images/icons/covid-blue.svg" alt="covis" />
                </div>
              </div>
  
              <div
                class="card col-12 col-sm-12 col-md-4 col-lg-3 col-3 p-2 bg-transparent border-0 card-animation mb-1"
              >
                <div class="card border-0 card-total-cases p-2">
                  <div
                    class="d-flex justify-content-start align-items-center p-2 border-bottom"
                  >
                    <h1 class="ms-2 fs-5">Total Deaths</h1>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center p-2"
                  >
                    <p class="ms-2 fs-2 mb-0 fw-bold text-danger">
                      56451854
                    </p>
                  </div>
                  <img src="./images/icons/covid-red.svg" alt="covis" />
                </div>
              </div>
  
              <div
                class="card col-12 col-sm-12 col-md-4 col-lg-3 col-3 p-2 bg-transparent border-0 card-animation mb-1"
              >
                <div class="card border-0 card-total-cases p-2">
                  <div
                    class="d-flex justify-content-start align-items-center p-2 border-bottom"
                  >
                    <h1 class="ms-2 fs-5">Total Recovered</h1>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center p-2"
                  >
                    <p class="ms-2 fs-2 mb-0 fw-bold text-success">
                      56451854
                    </p>
                  </div>
                  <img src="./images/icons/covid-green.svg" alt="covis" />
                </div>
              </div>
  
              <div
                class="card col-12 col-sm-12 col-md-4 col-lg-3 col-3 p-2 bg-transparent border-0 card-animation mb-1"
              >
                <div class="card border-0 card-total-cases p-2">
                  <div
                    class="d-flex justify-content-start align-items-center p-2 border-bottom"
                  >
                    <h1 class="ms-2 fs-5">Total Active</h1>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center p-2"
                  >
                    <p class="ms-2 fs-2 mb-0 fw-bold text-primary">
                      56451854
                    </p>
                  </div>
                  <img src="./images/icons/covid-blue.svg" alt="covis" />
                </div>
              </div>
  
              <div
                class="card col-12 col-sm-12 col-md-4 col-lg-3 col-3 p-2 bg-transparent border-0 card-animation mb-1"
              >
                <div class="card border-0 card-total-cases p-2">
                  <div
                    class="d-flex justify-content-start align-items-center p-2 border-bottom"
                  >
                    <h1 class="ms-2 fs-5">New Cases</h1>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center p-2"
                  >
                    <p class="ms-2 fs-2 mb-0 fw-bold text-orange">
                      56451854
                    </p>
                  </div>
                  <img src="./images/icons/covid-orange.svg" alt="covis" />
                </div>
              </div>
  
              <div
                class="card col-12 col-sm-12 col-md-4 col-lg-3 col-3 p-2 bg-transparent border-0 card-animation mb-1"
              >
                <div class="card border-0 card-total-cases p-2">
                  <div
                    class="d-flex justify-content-start align-items-center p-2 border-bottom"
                  >
                    <h1 class="ms-2 fs-5">New Deaths</h1>
                  </div>
                  <div
                    class="d-flex justify-content-start align-items-center p-2"
                  >
                    <p class="ms-2 fs-2 mb-0 fw-bold text-darkred">
                      56451854
                    </p>
                  </div>
                  <img src="./images/icons/covid-redark.svg" alt="covis" />
                </div>
              </div>
            </div>}
            
              </div>
            </section>


        </div>
      );
    }
  });