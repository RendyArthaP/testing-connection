import axios from "axios"
export const REGISTER = 'REGISTER'
export const LOGIN = 'LOGIN'

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

export const registerActions = (values) => {
  return function(dispatch) {
    console.log(values)
    axios
      .post("https://express-mongoose-jwt.herokuapp.com/auth/register", values)
      .then((res) => dispatch(setRegister(res.data)))
      .catch((err) => console.log(err))
  }
}