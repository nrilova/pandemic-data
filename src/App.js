import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Section2 from './components/views/landing/section-2/Section-2';
//import Header from "../src/components/views/landing/section-1/Header";
//import Symptom from "../src/components/views/landing/section-1/Symptom";
//import Section3 from './components/views/landing/section-3/Section-3';
//import Section4 from './components/views/landing/section-4/Section-4';
import Tracker3 from "./components/views/trackers/tracker-3/Tracker3";
import React from "react";
import Styles from './App.module.css';
import { fetchData } from '../src/module/Apiconsum';
import Table from './components/views/trackers/tracker-3/Table';

class App extends React.Component {
  state = {
    data: {},
  }
  
  async componentDidMount() {
    const fetchedata = await fetchData();

   this.setState({ data: fetchedData, country: country });
  }
    
  render(){
    const { data , country } = this.state;
  return (
    <div className={Styles.container}>
    {/* <div className="App">
      <Header />

      <div className="Symptom">
        <Symptom
          titulo="Aches and pains"
          text="Fever is a Key symptom,experts say. Don't fixate an a number, but know it's really not a fiver until your temperature reaches at least 100."
          imagen="banner-right"
        />
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
      <Section2 />
      <Section3 />
      <Section4 />
    </div>*/}
    <Tracker3 data={data} country={country} />
    <Table data={data} country={country}/>
    </div>
  );
}
}
export default App;
