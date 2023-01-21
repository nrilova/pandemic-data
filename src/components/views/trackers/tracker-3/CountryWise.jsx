import React from "react";
import Apicountries from '../../../module/Apicountries';
import './countrywise.css';


function CountryWise() {
    const data = Apicountries().sort((a, b) => b.cases - a.cases);

    console.log(data);
/* const CountryWise = () => {
   
    const [data, setData]=useState([]);

    const getCovidData = async () => {
       const res = await fetch('https://disease.sh/v3/covid-19/countries');
       const actualData = await res.json();
       console.log(actualData.CountryWise);
       setData(actualData.CountryWise);
    }


    useEffect(() => {
      getCovidData();
    }, []);
    */
   
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
                                 data.map((country) => {
                                    return (
                                       <><tr key={country.id}>
                                            <th><img src={country.countryInfo.flag} alt="fly"/></th>
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
export default CountryWise;

