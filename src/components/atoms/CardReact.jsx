import Card from 'react-bootstrap/Card';

function CardReact(props) {
  return (
    <div className='section-spread'>
    <Card  className="contenedor-spread "style={{ width: '17rem' }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardReact;