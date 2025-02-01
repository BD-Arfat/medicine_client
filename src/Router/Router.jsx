import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../LayOuts/MainLayOts/MainLayouts';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayouts></MainLayouts>
    }
])


export default Router;