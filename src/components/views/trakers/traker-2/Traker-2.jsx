import React from "react";
import Api from "../../../../module/ApiCountries"


function  TopCasesToday() {
    const data = Api().sort((a, b) => b.todayCases - a.todayCases);

    console.log(data);
    return (
        <div className="topCountry">
            <h4 className="titleTop">Today Cases</h4>
            <div className="countries">
                {data.slice(0, 10).map((country) => (
                    <div key={country.country} className="card-country">
                        <img className="imgCountry" src={country.countryInfo.flag} alt=""/>
                        <p className="nameCountry">{country.country}</p>
                        <p className="countryCases">{country.todayCases}</p>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default TopCasesToday;
