import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../LayOuts/MainLayOts/MainLayouts';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home/Home';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayouts></MainLayouts>,
        errorElement : <Error></Error>,
        children : [
            {
                path :'/',
                element : <Home></Home>
            }
        ]
    }
])


export default Router;