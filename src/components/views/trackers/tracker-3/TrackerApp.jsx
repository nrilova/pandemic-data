import Navtraker from '../traker-5/Nav';
import CountryWise from "./CountryWise";
import Top10 from "../../../atoms/Top10";
import CovidTracker from '../../../atoms/CovidTraker';

function App() {
    return (
      <main className="d-flex">
      <Navtraker />
      <section className="slashcountry">
      <CovidTracker />
      <Top10 />
      </section>
      <section className="trakerDos">
       <CountryWise />
      </section> 
      </main>
    );
  }
  
  export default App;
    
  