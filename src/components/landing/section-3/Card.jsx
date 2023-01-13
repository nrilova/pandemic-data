import React from 'react';

function Card(props) {
  return (
      <div className=" card d-flex flex-row flex-wrap flex-sm-wrap flex-md-wrap flex-lg-nowrap align-items-center justify-content-center p-2 border-0 bg-transparent">
        <img src={props.imageUrl} alt={props.imageAlt} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title mb-4">{props.title}</h5>
          <p className="card-text mb-0">{props.description}</p>
        </div>
      </div>
  );
}

export default Card;