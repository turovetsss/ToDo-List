import React from 'react';
import { ButtonsPage, FormPage, InputsPage } from 'pages';

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
    {
        path: '/form',
        element: <FormPage />,
        errorElement: <>404</>,
    },
];
