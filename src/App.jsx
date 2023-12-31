import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from "./components/Layout"
import RegisterAndLogin from './components/RegisterAndLogin'
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<RegisterAndLogin />} />
            <Route path='home' element={<Home />} />
            <Route path='*' element={<Navigate to={`.`} />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
