import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Sheard/Navbar/Navbar';
import Footer from '../../Sheard/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;