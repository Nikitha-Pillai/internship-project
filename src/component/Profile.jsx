import React from 'react';
import { Box, Button, TextField, Grid, Avatar, Divider } from '@mui/material';

const Profile = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '35ch' },
        textAlign: 'center',
        mt: 4,
      }}
      noValidate
      autoComplete="off"
    >
      <Avatar
        alt="Profile Image"
        src="https://www.shutterstock.com/image-illustration/bright-portrait-cute-smiling-kawaii-260nw-2387969365.jpg" // Replace with your image source
        sx={{ width: 100, height: 100, mx: 'auto', mb: 2, mt: 6 }}
      />
      <h2>Edit Profile</h2>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="outlined-name"
            label="Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-email"
            label="Email ID"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="outlined-place"
            label="Place"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-education"
            label="Education"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <TextField
            id="outlined-address"
            label="Address"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            id="outlined-dob"
            label="DOB"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-phone"
            label="Phone number"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Button variant="contained" sx={{ width: 120 }}>
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
