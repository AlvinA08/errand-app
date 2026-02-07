import "../styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Save user data to AuthContext
    registerUser({
      fullName: formData.fullName,
      email: formData.email,
    });

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="login-container">
      {/* Header */}
      <header className="login-header">
        <h1 className="logo">Estate Errands</h1>
      </header>

      {/* Content */}
      <div className="login-content">
        <div className="login-box">
          <h3 className="login-title">Create Account</h3>

          {error && <p className="error-text">{error}</p>}

          <form onSubmit={handleRegister}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="input-field"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="input-field"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn">
              Register
            </button>
          </form>

          <div className="login-footer">
            <Link to="/login">Already have an account? Login</Link>
            <Link to="/home" className="skip">
              Skip for now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
