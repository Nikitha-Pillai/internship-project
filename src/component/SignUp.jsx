import React, { useState } from 'react';
import './SignUp.css'; 
const SignUp = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [contact, setContact] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  const handleCheckboxChange = (e) => {
    setTerms(e.target.checked);
  };


  return (
    <div className="signup-body" >
    <div className="signup-container" >
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
         
        <div className="form-group">
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        </div>
        
       
        <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        </div>

        
        <div className="form-group">
         <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>


        <div className="form-group">
         <label htmlFor="education">Education:</label>
        <input
          type="text"
          id="education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        </div>


       <div className="form-group">
       <label htmlFor="contact">Address:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          
        />
        </div>
        


        <div className="form-group">
         <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        </div>


         <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <div className="form-group">
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={terms} // Fixed 'formData.terms' to 'terms'
              onChange={handleCheckboxChange} // Added handler for checkbox
            />
            I agree to the terms and conditions (if book is not returned or damaged fine will be charged).
          </label>
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignUp;