import { 
  GET_BUKU_REQUEST,
  GET_BUKU_SUCCESS,
  GET_BUKU_ERROR
} from '../actions/buku.actions.js'

const initialState = {
  data: []
}

const buku = (state = initialState, action) => {
  switch(action.type) {
    case GET_BUKU_REQUEST: 
      return {
        ...state
      }
    case GET_BUKU_SUCCESS:
      return {
        ...state,
        data:action.result
      }
    case GET_BUKU_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default buku