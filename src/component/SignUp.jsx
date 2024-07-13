import React, { useState } from 'react';
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
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="place">Place</label>
            <input
              type="text"
              id="place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">DOB</label>
            <input
              type="text"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="education"> Education </label>
            <input
              type="text"
              id="education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Address</label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group checkbox-group">
            <label htmlFor="terms">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={terms}
                onChange={handleCheckboxChange}
              />
              I agree to the terms and conditions (if book is not returned or damaged fine will be charged).
            </label>
          </div>

          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
