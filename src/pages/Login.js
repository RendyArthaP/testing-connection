import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { loginActions } from '../redux/actions/student.actions'
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const student = useSelector((state) => state.student.isLogged)

  const [loginState, setLoginState] = useState({
    name: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setLoginState({
      ...loginState,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if(loginState.name === "" || loginState.password === "") {
      alert('Please input your name or password')
    } else {
      if(!student) {
        dispatch(loginActions(loginState, history))
        console.log(loginState.name)
        alert('Login success! Please wait a moment')
      } else {
        alert('Username atau password anda salah')
      }
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter username" 
            name="name"
            value={loginState.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            name="password"
            value={loginState.password}
            onChange={handleChange}
          />
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/register" className="mx-2">
            Register Here
          </Link>
        </div>
      </Form>
    </Container>
  )
}

export default Login
