import React from 'react'
import { useNavigate } from 'react-router-dom';

const Adminhome = () => {
    const navigate = useNavigate();

    const handlemanageuserClick = () => {
        
          navigate('/manageuser');
        
        }
        const handlemanagebookClick = () => {
        
            navigate('/managebook');
          
          }
      
  return (
    <div>
{/* just for testing */}
<button  onClick={() => handlemanageuserClick()}>Manage User</button>
<button  onClick={() => handlemanagebookClick()}>Manage Book</button>

    </div>
  )
}

export default Adminhome