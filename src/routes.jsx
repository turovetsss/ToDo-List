import React from 'react';
import { ButtonsPage, ButtonsPageV2, FormPage, HooksExamples, InputsPage } from 'pages';

export const ROUTES = [
    {
        path: '/buttons',
        element: <ButtonsPage />,
        errorElement: <>404</>,
    },
    {
        path: '/buttons-v2',
        element: <ButtonsPageV2 />,
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
];
