import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function builder() {
    <Card style={{flex}}>
    <Card.Img variant="top" img src={require('./plus.jpg')} /> 
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
       Add Cards
      </Card.Text>
      <Button variant="primary">Add Commander</Button>
      <Button variant="primary">Add Card</Button>
    </Card.Body>
  </Card>
}

export default builder; 