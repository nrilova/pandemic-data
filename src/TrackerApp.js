import Navtraker from './components/views/trackers/traker-5/Nav';
import CountryWise from "./components/views/trackers/tracker-3/CountryWise";
import Top10 from "./components/atoms/Top10";
import CovidTraker from './components/atoms/CovidTraker';

function TrackerApp() {
    return (
      <div className="Container-tracker">
      <Navtraker />
      <div className='top10'>
      <CovidTraker />
      <Top10 />
      </div>
      <CountryWise />
      </div>
     
    );
  }
  
  export default TrackerApp;
    
  