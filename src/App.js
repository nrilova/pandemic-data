import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Section2 from './components/views/landing/section-2/Section-2';
//import Header from "../src/components/views/landing/section-1/Header";
//import Symptom from "../src/components/views/landing/section-1/Symptom";
//import Section3 from './components/views/landing/section-3/Section-3';
//import Section4 from './components/views/landing/section-4/Section-4';
//import Cards from './components/views/trackers/tracker-1/Cards';
//import Basic from './components/atoms/Basic';
//import Question from './components/views/landing/section-5/Question';
import TrackerApp from './components/views/trackers/tracker-3/TrackerApp';

function App() {
  return (
    <div className="App">
    {/* <Cards /> */}
   {/*  <Header /> */}
    <TrackerApp />
   {/*  <Basic /> */}
   {/*  <Symptom /> */}
    {/* <Section2 />
    <Section3 />
    <Section4 /> */}
   {/*  <Question /> */}
    </div>
  );
}

export default App;
  
