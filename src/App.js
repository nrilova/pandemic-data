import './App.css';
import Header from './components/landing/section-1/Header';
import Symptom from './components/landing/section-1/Symptom';
import Basic from './components/atoms/Basic'



function App() {
  return (
    <div className="App">
      <Header />
      <Basic />

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
 </div>


  );
}

export default App;
