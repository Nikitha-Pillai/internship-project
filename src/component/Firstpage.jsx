import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Firstpage.css';

const Firstpage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const handleScroll = ()=> {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the Login page
  };
  const handleSignupClick = () => {
    navigate('/signup'); // Navigate to the Login page
  };

  return (
    <div className="parallax-container">
      <div className="black-overlay" style={{ opacity: 1 - scrollPosition / window.innerHeight }}>
        <h1>Welcome to our Book Store</h1>
        <p><h2>A key to unlimited Books!</h2></p>
      </div>
      <div className="parallax-bg"></div>
      <div className="content"></div>
      <div className="dark-overlay" style={{ opacity: scrollPosition / window.innerHeight }}>
        <div className="overlay-text">
          <h2>Join us now and get access to unlimited books</h2>
          <button onClick={handleSignupClick}>Sign Up</button>
          <button onClick={handleLoginClick}>Login</button> {/* Handle login button click */}
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
