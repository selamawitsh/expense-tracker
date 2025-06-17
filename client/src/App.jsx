import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter as  Routes, Route } from "react-router-dom";
import ExpenseTracker from './pages/ExpenseTracker';


function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addTransaction" element={<ExpenseTracker />} />
      </Routes>
  )
}

export default App
