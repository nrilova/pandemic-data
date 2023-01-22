import React from "react";
import '../../landing/section-4/Section-4.css';
import Wash from '../../../asset/images/wash.png';
import Phone from '../../../asset/images/phone-1.png';


function Views () {
    return(
      <div className="Container">
      <h1>Wash your Hands min 20 seconds</h1> 
    <div className="Wash">
     <img className="Wash"
      src={Wash} 
      alt="Wash" /></div>
     
      <div className="container-1 md text-left lg-4 p-5">
        <div className="texto">
        <h2>Get the simple app<br></br>for latest news</h2>
        <p1> Human corunaviruses are common and are typically asociated<br ></br>with mild illnesses, similar to the common cold.</p1><br></br>
        <button className="btn">DOWNLOAD NOW</button></div>
        </div>
        <div className="Phone">
     <img className="phone" 
     src={Phone} 
     alt="phone" />
     </div>
  </div>
  
    );
    }

export default Views;
