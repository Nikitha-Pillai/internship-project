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
  const [expandedPanel1, setExpandedPanel1] = React.useState(false);
  const [expandedPanel2, setExpandedPanel2] = React.useState(false);
  const [expandedPanel3, setExpandedPanel3] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState('');
  const [isEditing, setIsEditing] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState(-1);

  const handleExpansion = (panel) => (event, isExpanded) => {
    if (panel === 'panel1') {
      setExpandedPanel1(isExpanded);
    } else if (panel === 'panel2') {
      setExpandedPanel2(isExpanded);
    } else if (panel === 'panel3') {
      setExpandedPanel3(isExpanded);
    }
  };

  const handleRentClick = () => {
    console.log('Rent button clicked');
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      if (isEditing) {
        const updatedComments = comments.map((comment, index) =>
          index === editingIndex ? newComment : comment
        );
        setComments(updatedComments);
        setIsEditing(false);
        setEditingIndex(-1);
      } else {
        setComments([...comments, newComment]);
      }
      setNewComment('');
    }
  };

  const handleEditComment = (index) => {
    setNewComment(comments[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accordionSummaryHeight = '60px'; // Set height for uniformity

  return (
    <Box mt={15}> {/* Adjust margin-top as needed */}
      <Accordion
        expanded={expandedPanel1}
        onChange={handleExpansion('panel1')}
        TransitionComponent={Fade}
        transitionDuration={400}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ mb: 2, height: accordionSummaryHeight }}
        >
          <Typography>Into the Book Details</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ height: expandedPanel1 ? 'auto' : accordionSummaryHeight }}>
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
        expanded={expandedPanel2}
        onChange={handleExpansion('panel2')}
        TransitionComponent={Fade}
        transitionDuration={400}
        sx={{ mt: 2 }} // Adjust margin-top to bring the summary down
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ height: accordionSummaryHeight }}
        >
          <Typography>Book Description</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ height: expandedPanel2 ? 'auto' : accordionSummaryHeight }}>
          <Typography variant="h6">J.K. Rowling</Typography>
          <Typography variant="body2">
            J.K. Rowling is the British author who created the popular and critically acclaimed
            Harry Potter series (seven books published between 1997 and 2007),
            about a lonely orphan who discovers that he is actually a wizard and enrolls in the Hogwarts School of Witchcraft and Wizardry.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expandedPanel3}
        onChange={handleExpansion('panel3')}
        TransitionComponent={Fade}
        transitionDuration={400}
        sx={{ mt: 2 }} // Adjust margin-top to bring the summary down
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ height: accordionSummaryHeight }}
        >
          <Typography>Comments</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ height: expandedPanel3 ? 'auto' : accordionSummaryHeight }}>
          <Box sx={{ mb: 2 }}>
            {!isEditing && comments.length === 0 && (
              <>
                <TextField
                  label="Add a comment"
                  multiline
                  rows={4}
                  fullWidth
                  value={newComment}
                  onChange={handleCommentChange}
                  sx={{ mb: 1 }}
                />
                <Button variant="contained" color="primary" onClick={handleAddComment} sx={{ width: '200px' }}>
                  Add Comment
                </Button>
              </>
            )}
            {comments.length > 0 && (
              <Box>
                {comments.map((comment, index) => (
                  <Box key={index} sx={{ mt: 1 }}>
                    {isEditing && editingIndex === index ? (
                      <>
                        <TextField
                          label="Edit comment"
                          multiline
                          rows={4}
                          fullWidth
                          value={newComment}
                          onChange={handleCommentChange}
                          sx={{ mb: 1 }}
                        />
                        <Button variant="contained" color="primary" onClick={handleAddComment} sx={{ width: '200px', mt: 1 }}>
                          Save
                        </Button>
                      </>
                    ) : (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography>{comment}</Typography>
                        <Button onClick={() => handleEditComment(index)} sx={{ ml: 2 }}>
                          Edit
                        </Button>
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
