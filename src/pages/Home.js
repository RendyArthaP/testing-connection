import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const students = useSelector((state) => state.student.data)
  console.log(students)
  return (
    <div>
      <h1>Hello, {students.name}</h1>
    </div>
  )
}

export default Home
