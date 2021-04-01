import axios from "axios"
import jwt from "jsonwebtoken"
export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'
export const STUDENT = 'STUDENT'

export const setRegister = (data) => {
  return {
    type: REGISTER,
    payload: data
  }
}

export const setLogin = (data) => {
  return {
    type: LOGIN,
    payload: data
  }
}

export const getStudent = (data) => {
  return {
    type: STUDENT,
    payload: data
  }
}

export const registerActions = (values) => {
  return function(dispatch) {
    axios
      .post("https://express-mongoose-jwt.herokuapp.com/auth/register", values)
      .then((res) => dispatch(setRegister(res.data)))
      .catch((err) => console.log(err))
  }
}

export const loginActions = (values, history) => {
  return function(dispatch) {
    axios
      .post("https://express-mongoose-jwt.herokuapp.com/auth/login", values)
      .then((res) => {
        const payload = jwt.verify(res.data.token, process.env.REACT_APP_JWT_KEY)
        localStorage.setItem('token', res.data.token)
        dispatch(setLogin(payload))
        history.push('/')
      })
      .catch((err) => console.log(err))
  }
}
