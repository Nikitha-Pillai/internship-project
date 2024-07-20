import React, { useState } from 'react';
import './Managebook.css'; // Ensure this file is correctly imported
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip'; // Import Tooltip

const Managebook = () => {
    const [books, setBooks] = useState([
        { id: 1, name: 'Book 1', isbn: '1234567890', user: 'User 1', fine: 10, available: false },
        { id: 2, name: 'Book 2', isbn: '0987654321', user: 'User 2', fine: 5, available: false },
        { id: 3, name: 'Book 3', isbn: '1122334455', user: '', fine: 0, available: true },
        { id: 4, name: 'Book 4', isbn: '2233445566', user: '', fine: 0, available: true },
        { id: 5, name: 'Book 5', isbn: '3344556677', user: 'User 3', fine: 15, available: false },
        { id: 6, name: 'Book 6', isbn: '4455667788', user: '', fine: 0, available: true },
        { id: 7, name: 'Book 7', isbn: '5566778899', user: 'User 4', fine: 20, available: false },
        { id: 8, name: 'Book 8', isbn: '6677889900', user: '', fine: 0, available: true }
    ]);

    const [open, setOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleClickOpen = (book) => {
        setSelectedBook(book);
        setOpen(true);
    };

    const handleClose = (confirmed) => {
        if (confirmed && selectedBook) {
            setBooks(prevBooks => 
                prevBooks.map(b => 
                    b.id === selectedBook.id ? { ...b, user: '', fine: 0, available: true } : b
                )
            );
            alert('The book has been returned and is now available.');
        } else if (!confirmed) {
            alert('Please clear the fine before returning the book.');
        }
        setOpen(false);
        setSelectedBook(null);
    };

    const handleDelete = (bookId) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
        alert('The book has been deleted.');
    };

    return (
        <div className="manage-books">
            <h2>Manage Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>ISBN Number</th>
                        <th>Rented By</th>
                        <th>Fine</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.name}</td>
                            <td>{book.isbn}</td>
                            <td>{book.user || 'Available'}</td>
                            <td>Rs.{book.fine}</td>
                            <td>
                                {book.available ? (
                                    <Tooltip title="The book is available" arrow>
                                        <span>
                                            <Button 
                                                variant="contained"
                                                color="primary"
                                                disabled
                                            >
                                                Return
                                            </Button>
                                        </span>
                                    </Tooltip>
                                ) : (
                                    <Button 
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleClickOpen(book)}
                                    >
                                        Return
                                    </Button>
                                )}
                            </td>
                            <td>
                                {book.fine === 0 ? (
                                    <Button 
                                        variant="contained"
                                        style={{ backgroundColor: '#1976d2', color: '#fff' }} // Blue color
                                        onClick={() => handleDelete(book.id)}
                                    >
                                        Delete
                                    </Button>
                                ) : (
                                    <Tooltip title="The book cannot be deleted unless the fine is 0" arrow>
                                        <span>
                                            <Button 
                                                variant="contained"
                                                style={{ backgroundColor: '#e0e0e0', color: '#b0b0b0' }} // Disabled color
                                                disabled
                                            >
                                                Delete
                                            </Button>
                                        </span>
                                    </Tooltip>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog
                open={open}
                onClose={() => handleClose(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Fine Clearance"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        The fine amount is Rs.{selectedBook?.fine}. Is the fine cleared?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose(false)} color="primary">
                        No
                    </Button>
                    <Button onClick={() => handleClose(true)} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Managebook;
