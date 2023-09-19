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
    const data = await fetch("https://api.pexels.com/v1/curated?query=nature&per_page=12", options)
    const dataObj = await data.json()
    setPhotosList(dataObj.photos);
  }

  useEffect(() => {
    getPhotos()
  }, []);

  // console.log(photosList);



  const history = useNavigate()

  const handleClick = () => {
    signOut(database).then( value => {
      // console.log(value, "value")
      history("/")
    })
  }

  const photosListElement = photosList.map( photo => (
    <div key={photo.id}>
      <img 
        src={photo.src.tiny} 
        className='rounded' 
        alt={photo.alt} />
    </div>
  ))

  return (
    <div className='bg-bg-orange w-full h-max p-8 | flex flex-col justify-center items-center gap-8'>
      <button onClick={handleClick} className='text-orange font-semibold rounded-md py-2  | absolute top-6 right-8'>Sign Out</button>
      <h1 className='text-black text-2xl'>Drag & Drop the images wherever you like</h1>
      <div className='w-full grid sm:grid-cols-4 grid-cols-2 content-center gap-4 '>
        {
          photosList.length > 0? 
          photosListElement: 
          <h2 className='w-full text-center text-3xl m-auto h-calc p-20'>Loading...</h2>
        }
      </div>
    </div>
  )
}

export default Home