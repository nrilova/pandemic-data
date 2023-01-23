import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basic from './components/atoms/Basic';
import  Header from '../src/components/views/landing/section-1/Header';
import Symptom from './components/views/landing/section-1/Symptom';


 function App() {
return(
    <div className="App">
      <Header />
      <Basic />
      <Symptom />
  
</div>
  
);
}


export default App;
