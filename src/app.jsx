import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from 'routes';

import './variables.scss';
import './app.scss';

const router = createBrowserRouter(ROUTES);

export const App = props => {
    return <RouterProvider router={router} />;
};
