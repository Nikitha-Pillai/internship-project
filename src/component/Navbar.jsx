import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BookIcon from '@mui/icons-material/MenuBook';

const NavBar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileClick = () => {
    navigate('/edit'); // Navigate to Profile.jsx
    handleCloseUserMenu();
  };

  const handleLogoutClick = () => {
    navigate('/signup'); // Navigate to Login.jsx
    handleCloseUserMenu();
  };
  const handleLoginClick = () => {
    navigate('/login'); // Navigate to Login.jsx
    handleCloseUserMenu();
  };


  const handleLibraryClick = () => {
    navigate('/see');
    handleCloseUserMenu();
  };

  const handleBookIconClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(33, 33, 33, 0.8)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ minHeight: '64px', padding: '0' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={handleBookIconClick}
          sx={{
            '&:focus': { outline: 'none' },
          }}
        >
          <BookIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '20px' }}>
          Book Store Library 
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
            onClick={handleOpenUserMenu}
            sx={{
              '&:focus': { outline: 'none' }
            }}
          >
            <Avatar
              alt="Profile Image"
              src="https://www.shutterstock.com/image-illustration/bright-portrait-cute-smiling-kawaii-260nw-2387969365.jpg" // Replace with your image source
              sx={{ width: 32, height: 32 }}
            />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="user-menu"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleProfileClick}>My Profile</MenuItem>
            <MenuItem onClick={handleLibraryClick}>My Library</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Signup</MenuItem>
            <MenuItem onClick={handleLoginClick}>Login</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
