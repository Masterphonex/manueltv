import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import AdminDash from './pages/AdminDash'

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/ldjshvsdlvhdlvhbslrvhbelvablrblebvljhdblvrqbarlieuvebvebvebvrhlejbvlebrhvlhbl' element={<AdminDash />}/>
    </Routes>
  )
}

export default App