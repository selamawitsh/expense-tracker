import React from "react";
import "../styles/register.css";
import loginImage from "../assets/login.png";

function Register() {
  return (
    <div className="register-page">
      {/* Left Side */}
      <div className="register-left">
        <div className="logo">
          <span className="logo-text">MyMoney Tracker</span>
        </div>
        
        <div className="form-box">
          <h2>Create Account</h2>
          <form>
            <label htmlFor="fullname">Full Name</label>
            <input
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
            />

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

            <label htmlFor="budget">
              Monthly Budget <span className="optional">(Optional)</span>
            </label>
            <div className="budget-input">
              <span>Birr</span>
              <input id="budget" type="number" placeholder="1500" />
            </div>

            <button type="submit">Register</button>
            <p>
              Already have an account? <a href="#">Login</a>
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
  );
}

export default Register;
