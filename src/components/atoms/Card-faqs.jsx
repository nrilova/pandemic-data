import React from "React";
import Card from 'react-bootstrap/Card';

function Cardfaqs(Props) {
    return (
        <Card>
            <Card.Body>
                {Props.description}
            </Card.Body>
        </Card>
    )
}
export default Cardfaqs;