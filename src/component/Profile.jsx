import React from 'react';
import { Box, Button, TextField, Grid, Avatar, Divider } from '@mui/material';

const Profile = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '30ch' },
        textAlign: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <Avatar
        alt="Profile Image"
        src="https://www.shutterstock.com/image-illustration/bright-portrait-cute-smiling-kawaii-260nw-2387969365.jpg" // Replace with your image source
        sx={{ width: 100, height: 100, mx: 'auto', mb: 2,mt:6 }}
      />
      <h2>Edit Profile</h2>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="outlined-required"
            label="Name"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-disabled"
            label="Email ID"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-required"
            label="Place"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Education"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
          <TextField
            id="outlined-read-only-input"
            label="Address"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-required"
            label="DOB"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="Phone number"
            label="Phone number"
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Grid>
      </Grid>

      <Button variant="contained" sx={{ mt: 6 }}>
        Update
      </Button>
    </Box>
  );
};

export default Profile;
