import React from 'react';
import CardReact from '../section-3/CardReact';
import wear1 from '../../../images/p-1.jpg';
import wear2 from '../../../images/p-2.jpg';
import wash1 from '../../../images/p-3.jpg';
import wash2 from '../../../images/p-4.jpg';
import keep1 from '../../../images/p-5.jpg';
import keep2 from '../../../images/p-6.jpg';



function Section3() {
  return (
      <div className='prop-container'>
        <div className='row justify-content-center'>
          <div className='col-xl-8'>
            <div className='section-title text-center'>
              <h2 className='title'>Spreads</h2>
              <h3 className='subtitle'>Disease spreads from person to person</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-6 has-animation'>
            <div className='card section-speads'>
            
            <CardReact 
                imageUrl={wear1}
                imageAlt="wear facemask 1"
                title="Wear FaceMask"
                description=" Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100"
                />
            
            <CardReact 
                imageUrl={wash1}
                imageAlt="wash hands 1"
                title="Wash your hangs often"
                description="Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest."
                />
            
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
        </div>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-6 has-animation'>
            <div className='card section-spreads'>
            <CardReact 
                imageUrl={wear2}
                imageAlt="wear facemask 2"
                title="Wear Facemask"
                description=" Fever is a key symptom, experts say. Don't fixate on a number,
                but know it's really not a fever until your temperature reaches
                at least 100"
                />
            
            <CardReact 
                imageUrl={wash2}
                imageAlt="wash your hangs often"
                title="wash your hangs often"
                description=" Coughing is another key symptom, but it's not just any cough,
                said Schaffner. It should be a dry cough that you feel in your
                chest."
                />
            
            <CardReact 
                imageUrl={keep2}
                imageAlt="keep social distance"
                title="Keep social distance"
                description="Shortness of breath can be a third -- and very serious --
                manifestation of Covid-19, and it can occur on its own, without
                a cough."
                />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Section3
