
// import "../../atomos/recuadroTrackerStyle.css";
import ApiAll from "../../module/ApiAll"
import './CovidTraker.css'
  
const CovidTraker = () => {
    const responseData = ApiAll();
    return (
        <div className="Covid-Traker">

            <h4>Covid-19 Traker</h4>
        <div className='cardCases'>
        <h4 className="textoStyle">Total Case</h4>
        <h2 className="numberCovidTraker">{responseData.cases}</h2>
        </div>

        <div className='cardclase2'>
        <h4 className="textoStyle">Active Case</h4>
        <h2>{responseData.active}</h2>
        </div>

        <div className='cardclase3'>
        <h4 className="textoStyle">Recovered Case</h4>
        <h2>{responseData.recovered}</h2>
        </div>

        <div className='cardclase4'>
        <h4 className="textoStyle">Deaths Case</h4>
        <h2>{responseData.deaths}</h2>
        </div>
    
        </div>
    )}
    
    export default CovidTraker;