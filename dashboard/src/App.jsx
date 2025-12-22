import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import './app.css'
import { Routes,Route } from 'react-router-dom'



import"./App.css"
import NavBar from './vendorDashboard/components/NavBar'
import Login from './vendorDashboard/components/forms/Login'
import Notfound from './vendorDashboard/components/Notfound'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App
