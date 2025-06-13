import React from 'react'
import { Link } from "react-router-dom";
import "../styles/register.css";
import loginImage from "../assets/login.png";

function Login() {
  return (
    <div className="register-page">
          {/* Left Side */}
          <div className="register-left">
            <div className="logo">
              <span className="logo-text">MyMoney Tracker</span>
            </div>
            
            <div className="form-box">
              <h2>Welcome Back</h2>
              <form>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your.email@student.edu.et"
                  autoComplete="email"
                />
    
                <label htmlFor="password">Password</label>
                <div className="password-input">
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    autoComplete="new-password"
                  />
                </div>
    
                <button type="submit">Login</button>
                <p>
                  New User?<Link to="/register">Register Here</Link>
                </p>
              </form>
            </div>
          </div>
    
          {/* Right Side */}
          <div className="register-right">
            <div className="register-bg-gradient"></div>
            <img
              src={loginImage}
              alt="Finance illustration"
              className="register-image"
            />
          </div>
        </div>
  )
}

export default Login
