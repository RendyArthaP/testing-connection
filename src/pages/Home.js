import React from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../components/BookCard'

const Home = () => {
  const students = useSelector((state) => state.student.data)
  console.log(students)
  return (
    <div>
      <h1>Hello, {students.name}</h1>
      <h4>List of books you need:</h4>
      <BookCard />
    </div>
  )
}

export default Home
