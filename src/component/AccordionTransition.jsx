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
import TextField from '@mui/material/TextField';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState('');

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleRentClick = () => {
    console.log('Rent button clicked');
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box mt={15}> {/* Adjust margin-top as needed */}
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleExpansion('panel1')}
        TransitionComponent={Fade}
        transitionDuration={400}
        sx={{
          '& .MuiAccordion-region': { height: expanded === 'panel1' ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded === 'panel1' ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ mb: 2 }} // Adjust margin-bottom to bring the summary down
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
              sx={{ 
                '& .MuiRating-icon': {
                  fontSize: '1rem', // Adjust font-size to make stars smaller
                  padding: '0 1px', // Adjust padding to make stars closer
                }
              }}
            />
          </Typography>
          <Button variant="contained" color="primary" onClick={handleRentClick} sx={{ mt: 2 }}>
            Rent
          </Button>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleExpansion('panel2')}
        TransitionComponent={Fade}
        transitionDuration={400}
        sx={{ mt: 2 }} // Adjust margin-top to bring the summary down
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Book Description</Typography>
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
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleExpansion('panel3')}
        TransitionComponent={Fade}
        transitionDuration={400}
        sx={{ mt: 2 }} // Adjust margin-top to bring the summary down
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Add a comment"
              multiline
              rows={4}
              fullWidth
              value={newComment}
              onChange={handleCommentChange}
              sx={{ mb: 1 }}
            />
            <Button variant="contained" color="primary" onClick={handleAddComment}>
              Add Comment
            </Button>
          </Box>
          <Box>
            {comments.length === 0 ? (
              <Typography>No comments yet</Typography>
            ) : (
              comments.map((comment, index) => (
                <Typography key={index} sx={{ mt: 1 }}>
                  {comment}
                </Typography>
              ))
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
