import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import ExpenseTracker from './pages/ExpenseTracker';
import TransactionList from './pages/TransactionList';


function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addTransaction" element={<ExpenseTracker />} />
        <Route path="/transaction-list" element={<TransactionList />} />
      </Routes>
  )
}

export default App
