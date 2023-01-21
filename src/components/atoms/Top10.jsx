import React from "react";
import Api from "../../module/ApiCountries"
import './Top10.css'

function TopCountry() {
    const data = Api().sort((a, b) => b.cases - a.cases);

    console.log(data);
    return (
        <div className="topcountry">
            <h4 className="titletop">Top 10 Country</h4>
            <div className="paises">
                {data.slice(0, 10).map((country) => (
                    <div key={country.country} className="card-country">
                        <img className="img-country" src={country.countryInfo.flag} alt="fly"/>
                        <p className="name-country">{country.country}</p>
                        <p className="country-cases">{country.cases}</p>
                    </div>
                ))}
            
            </div>
        </div>
    )
}

export default TopCountry;