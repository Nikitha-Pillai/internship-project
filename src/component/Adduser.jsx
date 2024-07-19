import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Adduser = () => {
  const initialRows=[{
    id: '1',
   name: 'Sneha',
   place: 'City1',
   age: 25,
   email: 'sneha@example.com',
   education: 'Bachelors',
   address: '123 Street, City1',
   phone: '1234567890',
   image: 'image_url_1'},
   {
       id: '2',
       name: 'John',
       place: 'City2',
       age: 30,
       email: 'john@example.com',
       education: 'Masters',
       address: '456 Avenue, City2',
       phone: '0987654321',
       image: 'image_url_2'
   },
   {
       id: '3',
       name: 'Emily',
       place: 'City3',
       age: 28,
       email: 'emily@example.com',
       education: 'PhD',
       address: '789 Boulevard, City3',
       phone: '1122334455',
       image: 'image_url_3'
   }
]
const[rows,setRows]=useState(initialRows)
const [editingRowId, setEditingRowId] = useState(null);
const handleUpdate = (id) => {
  setEditingRowId(id);
}
const handleSave = () => {
  setEditingRowId(null);
};

const handleChange = (e, id) => {
  const { name, value } = e.target;
  setRows(rows.map(row => (row.id === id ? { ...row, [name]: value } : row)));
};
const handleAdd = () => {
  const newRow = {
    id: (rows.length + 1).toString(),
    name: 'New User',
    place: 'New City',
    age: 10,
    email: 'newuser@example.com',
    education: 'New Education',
    address: 'New Address',
    phone: '0000000000',
    image: 'new_image_url'
  };
  setRows([...rows, newRow]);
};
  return (
    <div>
      <div style={{  marginTop: '100px',display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' ,paddingRight: '20px', paddingLeft: '20px'}}>
                <Button variant="contained" onClick={handleAdd}>
                    Add
                </Button>
            </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Userid</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">Place</TableCell>
          <TableCell align="right">Age</TableCell>
          <TableCell align="right">Email id</TableCell>
          <TableCell align="right">Education</TableCell>
          <TableCell align="right">Address</TableCell>
          <TableCell align="right">Phone number</TableCell>
          <TableCell align="right">Image</TableCell>
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
           {/*<TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.place}</TableCell>
            <TableCell align="right">{row.age}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.education}</TableCell>
            <TableCell align="right">{row.address}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.image}</TableCell>
            <TableCell align="right">
                 <Button variant="contained" onClick={() => handleUpdate(row.id)}>
                     Update
                 </Button>
          </TableCell>*/}
          <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="name" value={row.name} onChange={(e) => handleChange(e, row.id)} /> : row.name}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="place" value={row.place} onChange={(e) => handleChange(e, row.id)} /> : row.place}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="age" value={row.age} onChange={(e) => handleChange(e, row.id)} /> : row.age}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="email" value={row.email} onChange={(e) => handleChange(e, row.id)} /> : row.email}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="education" value={row.education} onChange={(e) => handleChange(e, row.id)} /> : row.education}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="address" value={row.address} onChange={(e) => handleChange(e, row.id)} /> : row.address}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="phone" value={row.phone} onChange={(e) => handleChange(e, row.id)} /> : row.phone}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? <TextField name="image" value={row.image} onChange={(e) => handleChange(e, row.id)} /> : row.image}
                </TableCell>
                <TableCell align="right">
                  {editingRowId === row.id ? (
                    <Button variant="contained" sx={{ backgroundColor: 'green', color: 'white' }} onClick={handleSave}>
                      Save
                    </Button>
                  ) : (
                    <Button variant="contained"  onClick={() => handleUpdate(row.id)}>
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

export default Adduser