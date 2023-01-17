import React from 'react'
import '../../../views/landing/section-1/Symptom.css';

 function Symptom(props) {
  return (
    <div className="section-symptom">
        <div className="contenedor-symptom">
           <img className="imagen-symptom"
<<<<<<< HEAD:src/components/landing/section-1/Symptom.jsx
           src={require(`../../../images/${props.imagen}.png`)}
           alt='pulmones'/> 
           <div className="description-symptom">
=======
           src={require(`../../../asset/images/${props.imagen}.png`)}
           alt='pulmones'/>
>>>>>>> c9b03b56fcc64db3cb3b5595300cb688a231e9b4:src/components/views/landing/section-1/Symptom.jsx
            <h3 className="name-symptom">{props.titulo} </h3>
            <p className="text-symptom">{props.text} </p>
        </div>
        </div>
        </div>
    
    );
}
export default Symptom;
