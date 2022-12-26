import React from 'react';
import './Header.css'

import { Link } from 'react-router-dom';



const Header = () => {
    return (
                             
            <div className='header-link'>
            <div>
                <h1 style={{color:'pink'}}>QUIZ TIME</h1>
            </div>
            <div>
            <Link to ='/'>Home</Link>
             <Link to= '/statick'>Statick</Link> 
            <Link to='/blog'>Blog</Link> 
            </div>
        </div>
       
      
    );
};

export default Header;