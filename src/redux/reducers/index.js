import { combineReducers } from 'redux';
import student from './student.reducers'
import buku from './buku.reducers'

const rootReducers = combineReducers({
  student,
  buku
})

export default rootReducers