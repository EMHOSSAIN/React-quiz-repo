import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import img from '../Home/Quiz.jpg'




const Home = () => {
    const products = useLoaderData();

        return (
        <div className='home'>
            <div>
                <div className='home-header' >
                  <img src= {img}  alt=''></img>
                   <h4>Ready for a <span style={{fontSize: '40px', color: 'orange', fontWeight: '600'}}>Quiz?</span></h4>
                </div>

            </div>
            <div className='product-cart'>
              {
                products.data.map(product=> <Cart
                key={product.id}
                product={product}
                ></Cart>)
              }
                     
            </div>
        </div>
    );
};

export default Home;