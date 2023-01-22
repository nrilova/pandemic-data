import React from 'react'
import{Card, Col, Row} from 'react-bootstrap';
import '../../landing/section-1/CardGroup.css';

 function CardGroup(props) {
    return (
      <Row xs={1} md={4}  >
        <Col className= "card-symptom">
          <Card>
            <Card.Img
              src={require(`../../../asset/images/${props.imagen}.png`)}
            />
            <Card.Body>
              <Card.Title className="card-name">{props.titulo}</Card.Title>
              <Card.Text className="card-text">
              {props.text}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
}
export default CardGroup;
