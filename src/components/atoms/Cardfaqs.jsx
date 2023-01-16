import React from 'react'
import Card from 'react-bootstrap/Card';

 function Cardfaqs(props) {
  return (
    
    <Card>
    <Card.Body>
    {props.description}
    </Card.Body>
    </Card>

  )
}
export default Cardfaqs;