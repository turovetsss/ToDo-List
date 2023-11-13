import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import reportWebVitals from './reportWebVitals';

import './index.css';

const DATA = [
    { id: 'todo-0', name: 'Eat', completed: true },
    { id: 'todo-1', name: 'Sleep', completed: false },
    { id: 'todo-2', name: 'Repeat', completed: false },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <React.StrictMode>
        <App tasks={DATA} />
    </React.StrictMode>,
);

reportWebVitals();
