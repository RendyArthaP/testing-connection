import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerActions } from '../redux/actions/student.actions'

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const isLogged = useSelector((state) => state)
  console.log(isLogged.student)

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerActions(register))
    history.push('/login')
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Masukkan nama anda"
          value={register.name}
          onChange={handleChange}
          name="name"
        />
        <input 
          type="password"
          placeholder="Masukkan password anda"
          value={register.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
