import './countrywise.css';
import React, { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";


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
   

const [pg, setpg] = React.useState(0);
    const [rpg, setrpg] = React.useState(5);
  
    function handleChangePage(event, newpage) {
        setpg(newpage);
    }
  
    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }
return (
    <><div className="container-fluid mt-5">
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
                    {countries.slice(pg * rpg, pg *
                        rpg + rpg).map((country, Key) => {
                        return (
                            <><tr key={Key}>
                                <th><img className='Dos' src={country.countryInfo.flag} alt="flag" /></th>
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
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div><TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={countries.length}
            rowsPerPage={rpg}
            page={pg}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage} /></>
)

}
   