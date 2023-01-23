import ApiAll from "../module/ApiAll";
import './CovidTraker.css'
  
const CovidTraker = () => {
    const responseData = ApiAll();
    return (
        <div className="Covid-Traker">

            <h3>COVID-19 Traker</h3>
        <div className='cardCases'>
        <h4 className="textoStyle">Total Case</h4>
        <h2 className="numberCard">{responseData.cases}</h2>
        </div>

        <div className='cardCases2'>
        <h4 className="textoStyle">Active Case</h4>
        <h2 className="numberCard2">{responseData.active}</h2>
        </div>

        <div className='cardCases3'>
        <h4 className="textoStyle">Recovered Case</h4>
        <h2 className="numberCard3">{responseData.recovered}</h2>
        </div>

        <div className='cardCases4'>
        <h4 className="textoStyle">Deaths Case</h4>
        <h2 className="numberCard4">{responseData.deaths}</h2>
        </div>
    
        </div>
    )}
    
    export default CovidTraker;