import React from 'react';
import { ButtonsPage, InputsPage } from 'pages';

export const ROUTES = [
    {
        path: '/buttons',
        element: <ButtonsPage />,
        errorElement: <>404</>,
    },
    {
        path: '/inputs',
        element: <InputsPage />,
        errorElement: <>404</>,
    },
];
