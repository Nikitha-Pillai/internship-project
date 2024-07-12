import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleRentClick = () => {
    console.log('Rent button clicked');
  };

  return (
    <Box mt={6}> {/* Adjust margin-top as needed */}
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Into the Book Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">Harry Potter and the Chamber of Secrets</Typography>
          <Typography variant="subtitle1">Author: J.K. Rowling</Typography>
          <Typography variant="body2">ISBN: 978-0439064873</Typography>
          <Typography variant="body2">Publication Year: 1999</Typography>
          <Typography variant="body2">Genre: Fantasy</Typography>
          <Typography variant="body2">Status: Available</Typography>
          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            Rating: 
            <Rating
              name="book-rating"
              value={rating}
              onChange={(event, newValue) => setRating(newValue)}
              sx={{ ml: 1 }}
            />
          </Typography>
          <Button variant="contained" color="primary" onClick={handleRentClick} sx={{ mt: 2 }}>
            Rent
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Into the Author Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">J.K. Rowling</Typography>
          <Typography variant="body2">
            J.K. Rowling is the British author who created the popular and critically acclaimed
            Harry Potter series (seven books published between 1997 and 2007),
            about a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
