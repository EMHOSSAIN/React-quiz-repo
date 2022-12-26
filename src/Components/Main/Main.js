import React from 'react';
import './Main.css'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='main-component'>
            <Header> </Header>
            <Outlet> </Outlet>
            
        </div>
    );
};

export default Main;
