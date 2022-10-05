import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function deckcard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/plus.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Add new deck
        </Card.Text>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
  );
}

export default deckcard;