import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // Assuming you have custom styles in SignUp.css

const SignUp = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, place, dob, email, education, contact, phone, password, terms });
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
            <label htmlFor="place" className="signup-label">Place</label>
            <input
              type="text"
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="signup-input"
            />
          </div>

          <div className="signup-form-group">
            <label htmlFor="dob" className="signup-label">DOB</label>
            <input
              type="text"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
            <label htmlFor="contact" className="signup-label">Contact</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
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
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
