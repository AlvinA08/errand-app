import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // later: replace with real authentication
    const loginSuccessful = true;

    if (loginSuccessful) {
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      {/* Header */}
      <header className="login-header">
        <h1 className="logo">Estates Errands</h1>
      </header>

      {/* Content */}
      <div className="login-content">
        <div className="login-box">
          <h3 className="login-title">Login</h3>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
              required
            />

            <div className="forgot">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="login-footer">
            <Link to="/register">New Here? Register</Link>
            <Link to="/home" className="skip">
              Skip for now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
