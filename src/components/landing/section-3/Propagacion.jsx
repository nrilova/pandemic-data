import React from 'react';
import Card from './Card';
import wear from '../../../images/banner-right-image.png';
import wash from '../../../images/d-2.png';
import keep from '../../../images/banner-right-image1.png';

function propagacion() {
  return (
    <div className='prop-background'>
        <h2>Disease</h2>
        <div className='prop-cards d-flex bg-primary'>
            <Card 
                imageUrl={wear}
                imageAlt="imagen"
                title="Título del card"
                description="Descripción del card"
                />
            
            <Card 
                imageUrl={wash}
                imageAlt="imagen"
                title="Título del card"
                description="Descripción del card"
                />
            
            <Card 
                imageUrl={keep}
                imageAlt="imagen"
                title="Título del card"
                description="Descripción del card"
                />
            
        </div>
    </div>    
  )
}

export default propagacion

