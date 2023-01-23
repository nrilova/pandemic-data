import React from "react";
import Navtraker from '../nav/Nav'
import '../traker-1/Traker-1.css'
import Top10 from '../../../atoms/Top10'
import CovidTraker from '../../../atoms/CovidTraker'
import TopCasesToday from "../traker-2/Traker-2"
import TopCases from "../../../atoms/TopCases"



function Traker1 () {


return (
    <main className="d-flex">
    <Navtraker/>
    <section className="barraPaises">
        <CovidTraker/>
        <Top10/>
    </section>
    <section className="trakerDos">
        <TopCases/> <TopCasesToday/>
        
    </section>

    </main>
)
}

export default Traker1
