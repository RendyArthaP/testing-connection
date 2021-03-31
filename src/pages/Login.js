import React, { useState } from 'react'

const Login = () => {
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

  const handleLogin = () => {

  }
  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          placeholder="Masukkan nama anda"
          value={loginState.name}
          onChange={handleChange}
          name="name"
        />
        <input 
          type="password"
          placeholder="Masukkan password anda"
          value={loginState.password}
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

export default Login
