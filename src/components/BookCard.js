import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'

const BookCard = (books) => {
  const buku = books.books
  console.log(buku)
  return (
    <div>
      {/* {buku.map((book) => (
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
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
      ))} */}
    </div>
  )
}

export default BookCard
