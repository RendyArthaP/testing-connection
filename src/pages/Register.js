import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerActions } from '../redux/actions/student.actions'
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const student = useSelector((state) => state)
  console.log(student)

  const [register, setRegister] = useState({
    name: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setRegister({
      ...register,
      [name]: value
    })
  }

  const handleRegister= (e) => {
    e.preventDefault();
    dispatch(registerActions(register))
    history.push('/login')
  }

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username" 
            name="name"
            value={register.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            name="password"
            value={register.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Register
