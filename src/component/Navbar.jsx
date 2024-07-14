import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box, Avatar } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BookIcon from '@mui/icons-material/MenuBook';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleProfileClick = () => {
    navigate('/edit');
    handleCloseUserMenu();
  };

  const handleHomeClick = () => {
    navigate('/home');
    handleCloseUserMenu();
  };

  const handleLogoutClick = () => {
    navigate('/login');
    handleCloseUserMenu();
  };

  const handleLibraryClick = () => {
    navigate('/library');
    handleCloseUserMenu();
  };

  const handleBookIconClick = () => {
    if (adminPaths.includes(location.pathname)) {
      navigate('/adminhome');
    } else {
      navigate('/home');
    }
  };

  const handleAddUserClick = () => {
    navigate('/adduser');
    handleCloseUserMenu();
  };

  const handleAddBooksClick = () => {
    navigate('/addbook');
    handleCloseUserMenu();
  };

  const handleAdminClick = () => {
    navigate('/adminhome');
    handleCloseUserMenu();
  };

  const adminPaths = ['/adminhome', '/adduser', '/addbook', '/manageuser', '/managebook'];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgba(33, 33, 33, 0.8)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ minHeight: '64px', padding: '0', display: 'flex', justifyContent: 'space-between' }}>
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
       
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
            {adminPaths.includes(location.pathname) ? (
              [
                <MenuItem key="addUser" onClick={handleAddUserClick}>Add/Update User</MenuItem>,
                <MenuItem key="addBooks" onClick={handleAddBooksClick}>Add/Update Books</MenuItem>,
                <MenuItem key="admin" onClick={handleAdminClick}>Admin</MenuItem>,
                <MenuItem key="logout" onClick={handleLogoutClick}>Logout</MenuItem>,
              ]
            ) : (
              [
                <MenuItem key="home" onClick={handleHomeClick}>Go Home</MenuItem>,
                <MenuItem key="profile" onClick={handleProfileClick}>My Profile</MenuItem>,
                <MenuItem key="library" onClick={handleLibraryClick}>My Library</MenuItem>,
                <MenuItem key="logout" onClick={handleLogoutClick}>Logout</MenuItem>,
              ]
            )}
          </Menu>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
            onClick={handleOpenUserMenu}
            sx={{
              '&:focus': { outline: 'none' }
            }}
          >
            <ArrowDropDownIcon />
            <Avatar
              alt="Profile Image"
              src="https://www.shutterstock.com/image-illustration/bright-portrait-cute-smiling-kawaii-260nw-2387969365.jpg" // Replace with your image source
              sx={{ width: 32, height: 32, marginLeft: '8px' }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
