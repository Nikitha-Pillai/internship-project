import React, { useState } from 'react';
import './Library.css';

const Library = () => {
  const [books] = useState([
    { id: 1, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', Image: 'https://m.media-amazon.com/images/I/81q77Q39nEL.AC_UF1000,1000_QL80.jpg' },
    { id: 2, title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', Image: 'https://m.media-amazon.com/images/I/81NQA1BDlnL.AC_UF1000,1000_QL80.jpg' },
    { id: 3, title: 'Harry Potter and the Prisoner of Azkaban', author: 'J.K. Rowling', Image: 'https://toppsta.com/images/covers/5/9/0/4/9781408855904.webp?t=1709095286' },
    // Removed the duplicate book with id: 3
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    if (!cart.find(item => item.id === book.id)) {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item.id !== itemToRemove.id));
  };

  return (
    <div className="library-container">
      <div className="content-wrapper">
        <h1 className="title">Library Cart</h1>
        
        <div className="book-list">
          {books.map(book => (
            <div style={{ marginTop: '3%' }} key={book.id} className="book-item">
              <div className="book-info">
                <h3>{book.title}</h3>
                <img src={book.Image} width='100' height='150' alt={book.title} />
                <p>Author: {book.author}</p>
              </div>
              <div className="book-actions">
                <button
                  className="button"
                  onClick={() => addToCart(book)}
                  disabled={cart.some(item => item.id === book.id)}
                >
                  {cart.some(item => item.id === book.id) ? 'Rented' : 'Rent'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart">
          <h2>Library Cart</h2>
          {cart.length === 0 ? <p>Cart is empty</p> : null}
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <h3>{item.title}</h3>
                <img src={item.Image} width='100' height='150' alt={item.title} />
                <p>Author: {item.author}</p>
              </div>
              <button className="button" onClick={() => removeFromCart(item)}>Return</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
