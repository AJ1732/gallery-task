import React from 'react'
import { signOut } from 'firebase/auth'
import { database } from './FirebaseConfig'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const history = useNavigate()

  const handleClick = () => {
    signOut(database).then( value => {
      console.log(value, "value")
      history("/")
    })
  }

  return (
    <div className='bg-bg-orange w-full h-calc | flex flex-col justify-center items-center gap-8'>
      <h1>Home</h1>
      <button onClick={handleClick} className='text-orange font-semibold rounded-md py-2  | absolute top-6 right-8'>Sign Out</button>
    </div>
  )
}

export default Home