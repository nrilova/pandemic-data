import React from "react";
import "../../../views/landing/section-1/Symptom.css";

function Symptom(props) {
  return (
    <section className="section-symptom">
      <div className="contenedor-symptom justify-content-around m-2">
        <img
          className="imagen-symptom"
          src={require(`../../../asset/images/${props.imagen}.png`)}
          alt="pulmones"
        />
        <h3 className="name-symptom">{props.titulo} </h3>
        <p className="text-symptom">{props.text} </p>
      </div>
    </section>
  );
}
export default Symptom;
