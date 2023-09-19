import React, { useState, useEffect } from 'react'
import { signOut } from 'firebase/auth'
import { database } from './FirebaseConfig'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [photosList, setPhotosList] = useState([])

  const options = {
    method: 'GET',
    headers:{
      Accept: 'application/json',
  // ${import.meta.env.VITE_SOME_KEY}
      Authorization: `${import.meta.env.VITE_SOME_KEY}`
    }
  }
  // find a way to use the env
  async function getPhotos() {
    const data = await fetch("https://api.pexels.com/v1/search?query=nature&per_page=1", options)
    const dataObj = await data.json()
    setPhotosList(dataObj);
  }

  useEffect(() => {
    getPhotos()
  }, []);

  console.log(photosList);



  const history = useNavigate()

  const handleClick = () => {
    signOut(database).then( value => {
      // console.log(value, "value")
      history("/")
    })
  }

  return (
    <div className='bg-bg-orange w-full h-calc | flex flex-col justify-center items-center gap-8'>
      <button onClick={handleClick} className='text-orange font-semibold rounded-md py-2  | absolute top-6 right-8'>Sign Out</button>
      <h1>Home</h1>
      <div>

      </div>
    </div>
  )
}

export default Home