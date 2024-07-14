import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const columns = [
  { id: 'username', label: 'Username', minWidth: 170 },
  { id: 'userid', label: 'User ID', minWidth: 100 },
  { id: 'bookname', label: 'Book Name', minWidth: 170 },
  { id: 'returnDate', label: 'Return Date', minWidth: 170, align: 'right' },
  { id: 'fineAmount', label: 'Fine Amount', minWidth: 170, align: 'right', format: (value) => value.toLocaleString('en-US') },
  { id: 'block', label: 'Block User', minWidth: 170, align: 'center' },
];

function createData(username, userid, bookname, returnDate, fineAmount) {
  return { username, userid, bookname, returnDate, fineAmount };
}

const rows = [
  createData('John Doe', 'U001', 'Harry Potter', '2023-08-01', 0),
  createData('Jane Smith', 'U002', 'Lord of the Rings', '2023-08-05', 5),
  createData('Alice Johnson', 'U003', 'The Hobbit', '2023-07-15', 10),
  createData('Bob Brown', 'U004', '1984', '2023-07-20', 0),
  createData('Charlie Davis', 'U005', 'To Kill a Mockingbird', '2023-07-22', 15),
];

const Manageuser = () => {
  const handleBlockUser = (userid, fineAmount) => {
    if (fineAmount !== 0) {
      alert('Cannot block the user as the fine amount is not paid.');
    } else {
      // Implement delete logic here (simulate for demo)
      console.log(`User with ID ${userid} blocked.`);
      // Simulating delete action
      const updatedRows = rows.filter(row => row.userid !== userid);
      console.log('Updated rows:', updatedRows);
    }
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '100px' }}>
      <TableContainer sx={{ maxHeight: 440, marginTop: '10px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
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
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'block' ? (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => handleBlockUser(row.userid, row.fineAmount)}
                        >
                          Block
                        </Button>
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
    </Paper>
  );
};

export default Manageuser;
