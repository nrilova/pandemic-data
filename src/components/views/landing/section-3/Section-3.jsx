import React from 'react';
import CardReact from '../section-3/CardReact';
import wear1 from '../../../asset/images/p-1.jpg';
import wear2 from '../../../asset/images/p-2.jpg';
import wash1 from '../../../asset/images/p-3.jpg';
import wash2 from '../../../asset/images/p-4.jpg';
import keep1 from '../../../asset/images/p-5.jpg';
import keep2 from '../../../asset/images/p-6.jpg';



function Section3() {
  return (
    <div className='section-3'>
      <div className="section-title text-center">
        <h4 className="title">Spreads</h4>
        <h2 className="subtitle text-primary">Disease spreads from person to person</h2>
      </div>
      <div>
        <div className="container section-spreads">
          <div className="row justify-content-around m-3">
            <div className="card-spread col-md-3 p-5">
              <CardReact
                imageUrl={wear1}
                imageAlt="wear facemask 1"
                title="Wear FaceMask"
                description=" Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100"
              />
            </div>

            <div className="card-spread col-md-3 p-5">
              <CardReact
                imageUrl={wash1}
                imageAlt="wash hands 1"
                title="Wash your hangs often"
                description="Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest."
              />
            </div>
            <div className="card-spread col-md-3 p-5">
              <CardReact
                imageUrl={keep1}
                imageAlt="keep social distance"
                title="Keep social distance"
                description=" Shortness of breath can be a third -- and very serious --
                manifestation of Covid-19, and it can occur on its own, without
                a cough."
              />
            </div>
            </div>
          <div className="row justify-content-around m-3">
            <div className="card-spread col-md-3 p-5">
              <CardReact
                imageUrl={wear2}
                imageAlt="wear facemask 1"
                title="Wear FaceMask"
                description=" Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100"
              />
            </div>
            <div className="card-spread col-md-3 p-5">
              <CardReact
                imageUrl={wash2}
                imageAlt="wash hands 1"
                title="Wash your hangs often"
                description="Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest."
              />
            </div>
            <div className="card-spread col-md-3 p-5">
              <CardReact
                imageUrl={keep2}
                imageAlt="keep social distance"
                title="Keep social distance"
                description=" Shortness of breath can be a third -- and very serious --
                manifestation of Covid-19, and it can occur on its own, without
                a cough."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
