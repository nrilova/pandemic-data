import './countrywise.css';
import React, { useEffect, useState } from "react";

export default function CountryWise() {
    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
        const response = await fetch(
            'https://disease.sh/v3/covid-19/countries');
            const data = await response.json();
            
            setCountries( data) 
}
    fetchdata();
}, []);
   
return (
    <div className="container-fluid mt-5">
        <div className="main-heading">
        <h1 className="mb-5 text-center">
            <span className="font-weight-bold">Ajax Data Table-Covid-19 Country Wise State</span></h1>
        </div>
    
    <div className="table-responsive">
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th>Flag</th>
                    <th>Country</th>
                    <th>Cases</th>
                    <th>Newcases</th>
                    <th>Deaths</th>
                    <th>New Deaths</th>
                    <th>Recovered</th>
                    <th>Active</th>
                    <th>Crticial</th>
                    <th>Tested</th>
                </tr>
            </thead>
            <tbody>
                       {
                         countries.map((country, Key) => {
                            return (
                               <><tr key={Key}>
                                    <th><img src={country.countryInfo.flag} alt="flag"/></th>
                                    <td>{country.country}</td>
                                    <td>{country.cases}</td>
                                    <td>{country.newcases}</td>
                                    <td>{country.deaths}</td>
                                    <td>{country.newdeaths}</td>
                                    <td>{country.recovered}</td>
                                    <td>{country.active}</td>
                                    <td>{country.critical}</td>
                                    <td>{country.tested}</td>
                                    
                                </tr>
                                </>
                            )
                         })
                       } 
            </tbody>
        </table>
    </div>
 </div>
)

}
   