import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@library.com' && password === 'password') {
      console.log('Logged in');
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-h2">Login</h2>
          {error && <p className="login-error">{error}</p>}
          <div className="login-form-group">
            <div className="login-label">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              id="email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <div className="login-label">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              id="password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/home">Sign Up now!</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
