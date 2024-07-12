import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Profile from './component/Profile';
import Library from './component/Library';

import Login from './component/Login';
import SignUp from './component/SignUp';






function App() {
  return (

  
    
   <Router>
       <>
        <Navbar />
        <Routes>
        <Route path='/' element={<Homepage />} />
         <Route path='/edit' element={<Profile />} />
          <Route path='/see' element={<Library/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
        
        </Routes>
       </>
     </Router>
  );
}

export default App;
