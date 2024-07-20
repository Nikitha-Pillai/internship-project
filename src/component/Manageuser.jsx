import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Tooltip } from '@mui/material';

const columns = [
  { id: 'username', label: 'Username', minWidth: 170 },
  { id: 'userid', label: 'User ID', minWidth: 100 },
  { id: 'bookname', label: 'Book Name', minWidth: 170 },
  { id: 'returnDate', label: 'Return Date', minWidth: 170, align: 'right' },
  { id: 'fineAmount', label: 'Fine Amount', minWidth: 170, align: 'right', format: (value) => `Rs. ${value.toLocaleString('en-US')}` },
  { id: 'block', label: 'Block User', minWidth: 170, align: 'center' },
];

function createData(username, userid, bookname, returnDate, fineAmount) {
  return { username, userid, bookname, returnDate, fineAmount };
}

const Manageuser = () => {
  const [rows, setRows] = useState([
    createData('John Doe', 'U001', 'Harry Potter', '2023-08-01', 0),
    createData('Jane Smith', 'U002', 'Lord of the Rings', '2023-08-05', 5),
    createData('Alice Johnson', 'U003', 'The Hobbit', '2023-07-15', 10),
    createData('Bob Brown', 'U004', '1984', '2023-07-20', 0),
    createData('Charlie Davis', 'U005', 'To Kill a Mockingbird', '2023-07-22', 15),
  ]);

  const handleBlockUser = (userid, fineAmount) => {
    if (fineAmount !== 0) {
      alert('Cannot block the user as the fine amount is not paid.');
    } else {
      // Remove user from rows
      const updatedRows = rows.filter(row => row.userid !== userid);
      setRows(updatedRows);
      console.log(`User with ID ${userid} blocked.`);
    }
  };

  return (
    <div>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ 
          marginTop: '100px', 
          textAlign: 'center', 
          fontWeight: 'bold' 
        }}
      >
        Manage Users
      </Typography>
      <TableContainer sx={{ width: '90%', margin: '0 auto', border: '1px solid #ddd', borderRadius: '4px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ 
                    minWidth: column.minWidth, 
                    borderBottom: '2px solid #ddd', 
                    borderRight: '1px solid #ddd',
                    fontWeight: 'bold' // Make header text bold
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.userid}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ 
                        borderBottom: '1px solid #ddd', 
                        borderRight: '1px solid #ddd'
                      }}
                    >
                      {column.id === 'block' ? (
                        <Tooltip title={row.fineAmount !== 0 ? 'Fine not paid' : ''}>
                          <span>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => handleBlockUser(row.userid, row.fineAmount)}
                              disabled={row.fineAmount !== 0} // Disable button if fineAmount is not 0
                            >
                              Block
                            </Button>
                          </span>
                        </Tooltip>
                      ) : column.format && typeof value === 'number' ? (
                        column.format(value)
                      ) : (
                        value
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Manageuser;
