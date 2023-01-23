import React from "react";
import Api from "../../module/ApiCountries"


function TopCases() {
    const data = Api().sort((a, b) => b.cases - a.cases);

    console.log(data);
    return (
        <div className="topCountry">
            <h4 className="titleTop">Top Cases</h4>
            <div className="countries">
                {data.slice(0, 10).map((country) => (
                    <div key={country.country} className="card-country">
                        <img className="imgCountry" src={country.countryInfo.flag} alt="fly"/>
                        <p className="nameCountry">{country.country}</p>
                        <p className="countryCases">{country.cases}</p>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default TopCases;