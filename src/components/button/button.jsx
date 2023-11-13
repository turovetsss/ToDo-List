import React from 'react';

import './button.css';

export const Button = props => {
    const { children, type } = props;

    return <button type={type}>{children}</button>;
};
