import React, { useMemo } from 'react';

import './button.scss';

export const Button = props => {
    const { children, type = 'button', disabled, view = 'filled', size = 'm' } = props;

    const className = useMemo(() => ['button', `button--${view}`, `button--size-${size}`, props.className].join(' '), [props.className]);

    return (
        <button className={className} type={type} disabled={disabled}>
            {children}
        </button>
    );
};
