import Navtraker from './components/views/trackers/traker-5/Nav';
import CountryWise from "./components/views/trackers/tracker-3/CountryWise";
import Top10 from "./components/atoms/Top10";
import CovidTraker from './components/atoms/CovidTraker';

function App() {
    return (
      <div className="App">
      <Navtraker />
      <CovidTraker />
      <Top10 />
      <CountryWise />
        
      </div>
    );
  }
  
  export default App;
    
  