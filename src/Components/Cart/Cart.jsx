import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({product}) => {
   const{id,logo,name}= product;
    return (
        <div className='Cart-product'>
            <img src={logo} alt=''></img>
           <h3>Name: {name}</h3>

           <Link to ={`/quiz/${id}`}>

           <button>Get Quiz</button>
     
            </Link>
           
        </div>
    );
};

export default Cart;