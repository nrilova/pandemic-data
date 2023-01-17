import React from 'react'
import '../../../components/landing/section-1/Symptom.css';

 function Symptom(props) {
  return (
    <div className="section-symptom">
        <div className="contenedor-symptom">
           <img className="imagen-symptom"
           src={require(`../../../images/${props.imagen}.png`)}
           alt='pulmones'/> 
           <div className="description-symptom">
            <h3 className="name-symptom">{props.titulo} </h3>
            <p className="text-symptom">{props.text} </p>
        </div>
        </div>
        </div>
    
    );
}
export default Symptom;
