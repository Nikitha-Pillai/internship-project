import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Addbook = () => {
  const initialRows=[{
    id: '1',
        image: 'image_url_1',
        name: 'Book One',
        author: 'Author One',
        isbn: '123-4567890123',
        year: 2020,
        genre: 'Fiction',
        status: 'Available',
        rating: '4.5',
        like: 'Yes',
        desp: 'A great book on React.',
        comment: 'Highly recommended!'
    },
    {
        id: '2',
        image: 'image_url_2',
        name: 'Book Two',
        author: 'Author Two',
        isbn: '987-6543210987',
        year: 2019,
        genre: 'Non-Fiction',
        status: 'Checked Out',
        rating: '4.0',
        like: 'No',
        desp: 'An insightful book on JavaScript.',
        comment: 'Very informative.'
    },
    {
        id: '3',
        image: 'image_url_3',
        name: 'Book Three',
        author: 'Author Three',
        isbn: '555-6667778888',
        year: 2021,
        genre: 'Biography',
        status: 'Available',
        rating: '5.0',
        like: 'Yes',
        desp: 'A must-read book on CSS.',
        comment: 'Fantastic read!'
    },
    {
        id: '4',
        image: 'image_url_4',
        name: 'Book Four',
        author: 'Author Four',
        isbn: '444-3335556666',
        year: 2018,
        genre: 'Science Fiction',
        status: 'Available',
        rating: '3.5',
        like: 'Yes',
        desp: 'A thrilling science fiction novel.',
        comment: 'Good, but could be better.'
    
   
}]
const[rows,setRows]=useState(initialRows)
const [editingRowId, setEditingRowId] = useState(null);
const handleUpgrade = (id) => {
  setEditingRowId(id);
}
const handleSave = () => {
  setEditingRowId(null);
};

const handleChange = (e, id) => {
  const { name, value } = e.target;
  setRows(rows.map(row => (row.id === id ? { ...row, [name]: value } : row)));
};
const handleAddon = () => {
  const newRow = {
    id: (rows.length + 1).toString(),
    image: 'new_image_url',
    name: 'New Book',
    author: 'New Author',
    isbn: '000-0000000000',
    year: 2024,
    genre: 'New Genre',
    status: 'Available',
    rating: '0.0',
    like: 'No',
    desp: 'New description.',
    comment: 'New comment.'
    // Implement your add logic here
};
setRows([...rows, newRow]);
  };
  return (
    
      <div>
         
         <div style={{  marginTop: '100px',display: 'flex', justifyContent: 'flex-end', marginBottom: '10px',paddingRight: '20px', paddingLeft: '20px' }}>
                 <Button variant="contained" onClick={handleAddon}>
                     Add
                 </Button>
             </div>
 
          <TableContainer component={Paper}>
     <Table sx={{ minWidth: 650 }} aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>Bookid</TableCell>
           <TableCell align="right">Image</TableCell>
           <TableCell align="right">Name</TableCell>
           <TableCell align="right">Author</TableCell>
           <TableCell align="right">ISBN No</TableCell>
           <TableCell align="right">Publication Year</TableCell>
           <TableCell align="right">Genre</TableCell>
           <TableCell align="right">Status</TableCell>
           <TableCell align="right">Rating</TableCell>
           <TableCell align="right">Like</TableCell>
           <TableCell align="right">Description</TableCell>
           <TableCell align="right">Comment</TableCell>
           <TableCell align="right">Actions</TableCell> {/* New Actions column */}
          
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow
             key={row.id}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {row.id}
             </TableCell>
             {/*<TableCell align="right">{row.image}</TableCell>
             <TableCell align="right">{row.name}</TableCell>
             <TableCell align="right">{row.author}</TableCell>
             <TableCell align="right">{row.isbn}</TableCell>
             <TableCell align="right">{row.year}</TableCell>
             <TableCell align="right">{row.genre}</TableCell>
             <TableCell align="right">{row.status}</TableCell>
             <TableCell align="right">{row.rating}</TableCell>
             <TableCell align="right">{row.like}</TableCell>
             <TableCell align="right">{row.desp}</TableCell>
             <TableCell align="right">{row.comment}</TableCell>
             <TableCell align="right">
                  <Button variant="contained" onClick={() => handleUpgrade(row.id)}>
                      Update
                  </Button>
           </TableCell>  */}
           <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="image" value={row.image} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.image
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="name" value={row.name} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="author" value={row.author} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.author
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="isbn" value={row.isbn} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.isbn
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="year" value={row.year} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.year
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="genre" value={row.genre} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.genre
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="status" value={row.status} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.status
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="rating" value={row.rating} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.rating
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="like" value={row.like} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.like
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="desp" value={row.desp} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.desp
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <TextField name="comment" value={row.comment} onChange={(e) => handleChange(e, row.id)} />
                  ) : (
                    row.comment
                  )}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white' }} onClick={handleSave}>
                      Save
                    </Button>
                  ) : (
                    <Button variant="contained"  onClick={() => handleUpgrade(row.id)}>
                      Update
                    </Button>
                  )}
                </TableCell>
           
            
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
    </div>
  )
}

export default Addbook