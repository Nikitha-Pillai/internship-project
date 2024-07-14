import React, { useState, useEffect } from 'react';
import { Card, Box, CardContent, Typography, Button, IconButton, CardMedia } from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import bannerImage1 from '../assets/banner1.png'; 
import bannerImage2 from '../assets/banner2.png'; 
import bannerImage3 from '../assets/banner3.png'; 

const Homepage = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const navigate = useNavigate();

  const initialRows = [
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg' },
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://m.media-amazon.com/images/I/81NQA1BDlnL._AC_UF1000,1000_QL80_.jpg' },
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://toppsta.com/images/covers/5/9/0/4/9781408855904.webp?t=1709095286' },
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://m.media-amazon.com/images/I/51iQwWIl+XL.jpg' },
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://m.media-amazon.com/images/I/81zeKRGCPpL._AC_UF894,1000_QL80_.jpg' },
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://cdn.cultura.com/cdn-cgi/image/width=830/media/pim/9781408855713.jpg' },
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuC0z61YgeoZWsYg1xVpXplHq80W14vzG8FLakimnxVo8lGtQRyQEDGKo6kuSPWhWgHU&usqp=CAU' },
    { Book_name: 'Harry Potter', Author: 'JK Rowling', Status: 'Available', Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0W4QZXV0HppRjfogZ01K2re2OpNSuFrslY6wQ0uswg1JvZ_nFsPDCrnPI-hGQZc025Fs&usqp=CAU' },
  ];

  const [rows, setRows] = useState(initialRows);

  const bannerImages = [bannerImage1, bannerImage2, bannerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle favorite button click for a specific index
  const handleFavoriteClick = (index) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index] = {
        ...updatedRows[index],
        isFavorited: !updatedRows[index].isFavorited,
      };
      return updatedRows;
    });
  };

  const handleRentClick = (index) => {
    if (index === 0) {
      navigate('/accordion');
    } else {
      console.log('Rent button clicked for', rows[index].Book_name);
    }
  };

  return (
    <Box>
      {/* Banner image with text overlay */}
      <Box sx={{ position: 'relative', width: '80vw', height: '200px', mx: 'auto', mt: 10 }}>
        <Box
          component="img"
          src={bannerImages[bannerIndex]}
          alt="Banner"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Main content */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2, flexWrap: 'wrap' }}>
        {rows.map((row, index) => (
          <Card key={index} sx={{ flex: '1 0 30%', display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 290, maxWidth: 320, mb: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 200, objectFit: 'cover', marginTop: '10px' }}
              image={row.Image} // Ensure this path is correct
              alt={row.Book_name}
            />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                {row.Book_name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ mt: 1 }}>
                -{row.Author}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="div" sx={{ mt: 1 }}>
                Status: {row.Status}
              </Typography>
              <Button variant="contained" color="primary" onClick={() => handleRentClick(index)} sx={{ mt: 2, width: '200px', '&:focus': { outline: 'none' } }}>
                See Details
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ marginRight: 2 }}>
                  Rate it:
                </Typography>
                <IconButton
                  aria-label="favorite"
                  onClick={() => handleFavoriteClick(index)}
                  sx={{ color: row.isFavorited ? 'red' : 'inherit', '&:focus': { outline: 'none' } }}
                >
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Homepage;
