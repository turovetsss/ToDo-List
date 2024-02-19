import React from 'react';
import { ButtonsPage, FormPage, HooksExamples, InputsPage, LogForm, LogFormHook } from 'pages';

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
        path: '/forms',
        element: <FormPage />,
        errorElement: <>404</>,
    },
    {
        path: '/hooks-examples',
        element: <HooksExamples />,
        errorElement: <>404</>,
    },
    {
        path: '/login-page',
        element: <LogForm />,
        errorElement: <>404</>,
    },
    {
        path: '/login-hook',
        element: <LogFormHook />,
        errorElement: <>404</>,
    },
];
