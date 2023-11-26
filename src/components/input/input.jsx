import React, { useMemo } from 'react';

import './input.css';

export const Input = props => {
    const { children, type = 'input', disabled, view = 'filled', size = 'm' } = props;

    const className = useMemo(() => ['input', `input--${view}`, `input--size-${size}`, props.className].join(' '), [props.className, size, view]);

    return (
        <input className={className} type={type} disabled={disabled}>
            {children}
        </input>
    );
};
