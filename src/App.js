import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Section2 from './components/views/landing/section-2/Section-2';
import Header from "../src/components/views/landing/section-1/Header";
import Symptom from "../src/components/views/landing/section-1/Symptom";
import Section3 from './components/views/landing/section-3/Section-3';
import Section4 from './components/views/landing/section-4/Section-4';
import Navtraker from './components/views/trakers/nav/Nav'
import Traker1 from './components/views/trakers/traker-1/Traker-1'

function App() {
  return (
    <div className="App">
      <Traker1/>
    </div>
  );
}

export default App;
