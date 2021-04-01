import { REGISTER, LOGIN } from '../actions/student.actions'

const token = localStorage.getItem('token')

const initialState = token 
  ? {
    isLogged: true,
    data: {}
  } 
  : {
    isLogged: false,
    data: {}
  }

const student = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER: 
    return {
      registerData: action.payload
    }
    case LOGIN:
      return {  
        data: action.payload,
        isLogged: true
      }
    default: return state
  }
}

export default student