import axios from 'axios'
export const GET_BUKU_REQUEST = 'GET_BUKU_REQUEST'
export const GET_BUKU_SUCCESS = 'GET_BUKU_SUCCESS'
export const GET_BUKU_ERROR = 'GET_BUKU_ERROR'

export const getBukuRequest = () => {
  return {
    type: GET_BUKU_REQUEST,
  }
}

export const getBukuSuccess= (result) => {
  return {
    type: GET_BUKU_SUCCESS,
    result
  }
}

export const getBukuError = (error) => {
  return {
    type: GET_BUKU_ERROR,
    error
  }
}

export const getDataBuku = () => {
  return function(dispatch) {
    dispatch(getBukuRequest())

    axios
      .get("https://express-mongoose-jwt.herokuapp.com/buku")
      .then((result) => dispatch(getBukuSuccess(result.data)))
      .catch((error) => dispatch(getBukuError(error)))
  }
}