import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Choose your favourtie cake type!</h1>
      <Link to='/vote'>Show me how much you love cake</Link>
    </div>


  )

}