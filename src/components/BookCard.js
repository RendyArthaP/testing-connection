import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'

const BookCard = () => {
  return (
    <Container className="pt-4">
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top"/>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button 
            variant="primary">Sewa buku</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BookCard
