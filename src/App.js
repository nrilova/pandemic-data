import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Navbar from './components/landing/navbar/Navbar'
//import Traker1 from './components/trakers/traker-1/Traker-1'
import Section2 from './components/views/landing/section-2/Section-2';
import Header from "../src/components/views/landing/section-1/Header";
import Symptom from "../src/components/views/landing/section-1/Symptom";
import Section3 from './components/views/landing/section-3/Section-3';
import Section4 from './components/views/landing/section-4/Section-4';

function App() {
  return (
    <div className="App">
      <Header />

    <div className="Symptom">
      <Symptom
    titulo="Aches and pains"
    text="Fever is a Key symptom,experts say. Don't fixate an a number, but know it's really not a fiver until your temperature reaches at least 100."
    imagen="banner-right" />
      <Symptom 
    titulo="Runny nose"
    text="People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath."
    imagen="banner-right"
    />
      <Symptom 
    titulo="Sore throat"
    text="Older people,and those with underlying medical problems like high bloos pressure,heart and lung problems, diabetes,or cancer."
    imagen="banner-right"
    />
    </div>
    <Section2/>
    <Section3 />
    <Section4 />
 </div>

  );
}

export default App;
