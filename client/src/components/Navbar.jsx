import React from 'react'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
         <nav className="navbar">
                <span className="brand">
                  <b style={{ color: "#6366f1" }}>Student Expense Tracker</b>
                </span>
                <div className="nav-links">
                    <a href="/addTransaction">Add Transaction</a>
                    <a href="/transaction-list">Transaction List</a>
                    <a href="/report">Reports</a>
                </div>
              </nav>
    </div>
  )
}

export default Navbar
