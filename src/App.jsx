import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Profile from './component/Profile';
import Library from './component/Library';
import Login from './component/Login';
import SignUp from './component/SignUp';
import AccordionTransition from './component/AccordionTransition';
import Firstpage from './component/Firstpage';
import Adminhome from './component/Adminhome';
import Adduser from './component/Adduser';
import Addbook from './component/Addbook';
import Manageuser from './component/Manageuser';
import Managebook from './component/Managebook';

const AppWrapper = () => {
  const location = useLocation();
  const pathsWithoutNavbar = ['/', '/login', '/signup']; // Paths where Navbar should not be rendered
  const renderNavbar = !pathsWithoutNavbar.includes(location.pathname);

  return (
    <div>
      {renderNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/edit" element={<Profile />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accordion" element={<AccordionTransition />} />
        <Route path="/adminhome" element={<Adminhome />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/manageuser" element={<Manageuser/>} />
        <Route path="/managebook" element={<Managebook/>} />

      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
