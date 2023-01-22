import React from "react";
import Navtraker from '../nav/Nav'
import '../traker-1/Traker-1.css'
import Top10 from '../../../atoms/Top10'
import CovidTraker from '../../../atoms/CovidTraker'
//import Vista1 from "./Vista1"

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
    <section className="barraPaises">
        <CovidTraker/>
        <Top10/>
    </section>

    </main>
)
}

export default Traker1
