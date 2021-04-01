import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BookCard from '../components/BookCard'
import { getDataBuku } from '../redux/actions/buku.actions'

const Home = () => {
  const dispatch = useDispatch()
  const students = useSelector((state) => state.student.data)
  const books = useSelector((state) => state.buku.data.data)

  useEffect(() => {
    dispatch(getDataBuku())
  }, [])

  return (
    <div>
      <h1>Hello, {students.name}</h1>
      <h4>List books you need:</h4>
      <BookCard books = {books}/>
    </div>
  )
}

export default Home
