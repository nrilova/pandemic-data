<<<<<<< HEAD
=======

>>>>>>> 612f1b634cbb88ed3abe85195499f73ab5832eba
import Card from 'react-bootstrap/Card';


function CardImage(props) {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardImage;