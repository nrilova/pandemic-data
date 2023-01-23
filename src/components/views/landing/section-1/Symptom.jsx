import React from 'react'
import '../section-1/Symptom.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

 function Symptom() {
  return (
    <div className='container-cards' >
    <Card className="cards"style={{ width: '23rem' , height: '18rem' }}>
      <Card.Body>
      <Image className="imagen-symptom" style={{ width: '5rem' }}
           src={require(`../../../asset/images/banner-right.png`)}
           alt='pulmones'/> 
        <Card.Title>Aches and pains</Card.Title>
        <Card.Text>Older people,and those with underlying medical problems like high bloos pressure,heart and lung problems, diabetes,or cancer.</Card.Text>
      </Card.Body>
    </Card>
    <Card className="cards"style={{ width: '23rem' , height: '18rem' }}>
      <Card.Body>
      <Image className="imagen-symptom" style={{ width: '5rem' }}
           src={require(`../../../asset/images/banner-right.png`)}
           alt='pulmones'/> 
        <Card.Title>Runny nose</Card.Title>
        <Card.Text>"People of all ages who experience fever and/or cough associated withdifficulty breathing/shortness of breath.</Card.Text>
      </Card.Body>
    </Card>
    <Card className="cards"style={{ width: '23rem' , height: '18rem' }}>
      <Card.Body>
      <Image className="imagen-symptom" style={{ width: '5rem' }}
           src={require(`../../../asset/images/banner-right.png`)}
           alt='pulmones'/> 
        <Card.Title>Sore Throat</Card.Title>
        <Card.Text>Older people,and those with underlying medical problems like high bloos pressure,heart and lung problems, diabetes,or cancer.</Card.Text>
      </Card.Body>
    </Card>
    </div>
           
           
        
    
    );
}
export default Symptom;
