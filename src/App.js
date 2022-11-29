import React from 'react'
import Signup from './components/pages/signup/Signup'
import Login from './components/pages/login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <Router>
    <div>
      
      <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/' element={<Signup/>} />
      </Routes>
    </div>
  </Router>

  )
}
