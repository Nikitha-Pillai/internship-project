import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminhome.css'; // Assuming you have a CSS file for styling

const Adminhome = () => {
    const navigate = useNavigate();

    const handlemanageuserClick = () => {
        navigate('/manageuser');
    };

    const handlemanagebookClick = () => {
        navigate('/managebook');
    };

    return (
        <div className="admin-home">
            <div className="banner-container">
                <img 
                    src="https://assets.brightspot.abebooks.a2z.com/dims4/default/3c2c0bf/2147483647/strip/true/crop/1580x760+0+0/resize/998x480!/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.us-west-2.amazonaws.com%2F7e%2F18%2F158d3a63441586026597714430c0%2Fcarousel-crime-com-uk1.png" 
                    alt="Banner" 
                    className="banner-image" 
                />
                <div className="banner-text">Welcome to my Library</div>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1" alt="Books" />
                    <h3>Books</h3>
                    <p>Manage your collection of books...</p>
                    <button onClick={handlemanagebookClick}>Show More</button>
                </div>
                <div className="card">
                    <img src="https://st.depositphotos.com/1006536/3413/v/380/depositphotos_34139281-stock-illustration-social-networks-business-vector-illustration.jpg" alt="Users" />
                    <h3>Users</h3>
                    <p>Manage your library users...</p>
                    <button onClick={handlemanageuserClick}>Show More</button>
                </div>
            </div>
        </div>
    );
};

export default Adminhome;
