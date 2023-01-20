import React from "react";
import Navtraker from '../nav/Nav'
import '../traker-1/Traker-1.css'

// const url = "https://disease.sh/v3/covid-19/countries";
// const barra_paises = document.getElementById("barra_paises");

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     pintarBarra(data);
//   });


function Traker1 () {
return (
    <main className="d-flex">
    <Navtraker/>
    <section className="nav-info bg-white">
        <div className="d-flex flex-column overflow-auto vh-100" id="cards-container">
            <h4 className="py-4 p-4 pb-0 fw-bold fs-3">COVID-19 Tracker</h4>

            <div className="total-cases p-3" id="barra_info_superior">
                {/* <!-- Contenido --> */}
            </div>
          
            <div className="Top 10 Country p-3">
                <h4 className="fs-3">Top 10 Country</h4>
                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/us.png" alt="fly"/>
                                <p className="mb-0">USA</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">103701168</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/in.png" alt="fly"/>
                                <p className="mb-0">India</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">44681884</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/fr.png" alt="fly"/>
                                <p className="mb-0">France</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">39467281</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/de.png" alt="fly"/>
                                <p className="mb-0">Germany</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">37649808</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/br.png" alt="fly"/>
                                <p className="mb-0">Brazil</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">36697084</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/jp.png" alt="fly"/>
                                <p className="mb-0">Japan</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">31819310</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/kr.png" alt="fly"/>
                                <p className="mb-0">S. Korea</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">29927958</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/it.png" alt="fly"/>
                                <p className="mb-0">Italy</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">25363742</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/gb.png" alt="fly"/>
                                <p className="mb-0">UK</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">24243393</p>
                        </div>
                        </div>
                    </div>

                    <div className="p-3" id="barra_paises">
                        <div className="card d-flex flex-row justify-content-between align-items-center p-2 shadow-sm border-1 countries mb-2">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <img className="img-countries me-2" src="https://disease.sh/assets/img/flags/ru.png" alt="fly"/>
                                <p className="mb-0">Russia</p>
                            </div>
                        <div>
                            <p className="mb-0 text-blue-primary">21876336</p>
                        </div>
                        </div>
                    </div>

            </div>

        </div>
    </section>


    </main>
)
}

export default Traker1
