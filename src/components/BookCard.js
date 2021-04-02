import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'

const BookCard = (buku) => {
  const books = buku.buku
  console.log(books)
  return (
    <div>
      {!!books && books.map((book) => (
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} key={book._id}>
                <Card.Img variant="top" />
                <Card.Body>
                  <Card.Title>{book.namaBuku}</Card.Title>
                  <Card.Text>
                    {book.penerbit}
                  </Card.Text>
                  <Button variant="primary">Sewa Buku</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  )
}

export default BookCard
