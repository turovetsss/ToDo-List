import React from 'react';
import { ButtonsPage, FormPage, HooksExamples, InputsPage, InputsPage2 } from 'pages';

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
        path: '/inputs-v2',
        element: <InputsPage2 />,
        errorElement: <>404</>,
    },
    {
        path: '/forms',
        element: <FormPage />,
        errorElement: <>404</>,
    },
    {
        path: '/hooks-examples',
        element: <HooksExamples />,
        errorElement: <>404</>,
    },
];
