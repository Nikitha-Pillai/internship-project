import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Assuming you have custom styles in SignUp.css

const SignUp = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, age, email, education, address, phone, username, password, terms });
  };

  const handleCheckboxChange = (e) => {
    setTerms(e.target.checked);
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <div className='signup-h1'>
          <h1>Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-form-group">
            <label htmlFor="name" className="signup-label">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="age" className="signup-label">Age</label>
            <input
              type="text"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="email" className="signup-label">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="education" className="signup-label">Education</label>
            <input
              type="text"
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="address" className="signup-label">Address</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="phone" className="signup-label">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="username" className="signup-label">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="password" className="signup-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-checkbox-group">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={terms}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms" className="signup-terms-label">
              I agree to the terms and conditions (if book is not returned or damaged fine will be charged).
            </label>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>

          <div className="signup-link">
            <p>Already have an account? <Link to="/adminhome">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
